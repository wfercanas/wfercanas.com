I’m building a portal that can be used by multiple clients. One GitHub repo, multiple instances — one per client — .

Each client wants to customize part of the UI so it reflects their own aesthetics, and a key element here is the usage of fonts.

In this article, I will explain how I’m solving the issue using typography tokens, theme provider, google fonts and custom hooks.

## Typography Tokens

For tokens, I’m using a BEM structure. Here I show you how does it work in more detail using colors ([see article](http://wfercanas.com/article/using-bem-for-design-system-tokens)).

Briefly, a BEM token consists of 5 parts: entity, domain, block, element and modifier:

- **Entity**: is the client (e.g. acme)
- **Domain**: are the foundations of the design system, here I will talk about typography, but that could be color, spacing, etc.
- **Block**: are meaningful parts of the domain. In colors we can have colors for texts, strokes or surfaces. In typography we have headlines, labels, paragraphs, titles, etc.
- **Element**: are meaningless parts if they are not attached to a block. In terms of colors we have reds, blues, yellows and so on. In typography we have sizes: small, medium, large.
- **Modifier**: are subtle modifications we make to elements. In colors we have tones of color, in typography we have lineHeight, weight, tracking — letter-spacing — , etc.

So, we could have these tokens for acme:

- acme.typography.label.large.size = 16px
- acme.typography.label.large.lineHeight = 18px
- acme.typography.label.large.weight = 500
- acme.typography.label.large.font = “Open Sans, sans-serif”

In practice, if we need to add a label in its large variant inside a card and we have a Text component to make it work, it would look like this:

```js
function Card() {
  return (
    <div>
      <Text as="label" type="label" size="large">acme</Text>
    </div>
  )
}

function Text({children, as = 'p', type, size}) {
  return (
    <StyledText as={as} type={type} size={size}>
      {children}
    </StyledText>
  )
}

const StyledText = styled.p`
  font-size: ${({type, size}) => acme.typography[type][size].size};
  font-weight: ${({type, size}) => acme.typography[type][size].weight};
  letter-spacing: ${({type, size}) => acme.typography[type][size].tracking};
  line-height: ${({type, size}) => acme.typography[type][size].lineHeight};
  font-family: ${({type, size}) => acme.typography[type][size].font};
```

Here I’m using [styled-components](https://styled-components.com/) and props to determine how to style the component, but the styles are extracted from the token system with the BEM structure we just saw.

Given the fact that we don’t want to hardcode the client into the styles definition, we must make use of a theme provider, which in React tends to be an implementation of the useContext hook under the hood.

## Theme Provider

Continuing with the use of styled-components, we have inside the library the ThemeProvider [component](https://styled-components.com/docs/advanced#theming).

With this component, we can define a theme, pass it as props to the provider and guarantee that each styled-component we create will have access to that theme.

It’s like this:

```js
import { ThemeProvider } from "styled-components";

const theme = {
  /* client tokens */
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text as="label" type="label" size="large">
        acme
      </Text>
    </ThemeProvider>
  );
}

function Text({ children, as = "p", type, size }) {
  return (
    <StyledText as={as} type={type} size={size}>
      {children}
    </StyledText>
  );
}

const StyledText = styled.p`
  font-size: ${({ theme, type, size }) => theme.typography[type][size].size};
  font-weight: ${({ theme, type, size }) =>
    theme.typography[type][size].weight};
  letter-spacing: ${({ theme, type, size }) =>
    theme.typography[type][size].tracking};
  line-height: ${({ theme, type, size }) =>
    theme.typography[type][size].lineHeight};
  font-family: ${({ theme, type, size }) => theme.typography[type][size].font};
`;
```

Since we are using _useContext_ under the hood, we don’t have to pass the theme through props. The _StyledText_ component have access to it on its own.

I may set the theme with the acme tokens or any other client. It would be just a matter of fetching from an endpoint the tokens for the desired client and set the theme with that information.

<hr>

Everything looks easy up until now, but we have to solve the font-family CSS rule, because we may have a client whose font isn’t by default in the browser, so we have to somehow download it.

Let’s see how.

## Google Fonts

If we access [fonts.google.com](fonts.google.com), we have access to a wide variety of fonts that we can use in our projects. The most common way to use these resources is to copy the _link_ elements for the set of fonts we want to use and paste them inside the _head_ element of our HTML document.

Through this _link_ element, which at the end is of _rel=”stylesheet”_, we are defining a set of CSS rules related to font faces (@font-face). If you want, you can click on this example and your browser will show you these rules: https://fonts.googleapis.com/css2?family=Open+Sans&display=swap

If you look carefully, there is a rule for the different ranges of unicode characters. For simplification, we can use just the rules for latin ranges.

So, how do we use this? I had to create a new backend endpoint apart from the one that I use to get each client tokens. This new endpoint gives me information about a specific font I’m needing. The JSON I get looks like this:

```js
{
  "Open Sans": [
    {
      "family": "Open Sans",
      "url": "https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2",
      "options": {
        "weight": 400,
        "style": "normal"
      }
    },
    {
      "family": "Open Sans",
      "url": "https://fonts.gstatic.com/s/opensans/v35/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2",
      "options": {
        "weight": 500,
        "style": "normal"
      }
    }
  ]
}
```

The url for each variation can be extracted from the CSS rules you see when you open the link that google fonts gives you.

To get all the fonts you may need, you should:

1. Fetch the tokens of the client
2. Look inside the typography tokens and find all the different fonts defined there — for acme its just “Open Sans” but another client may want “Roboto” for titles and “Lato” for paragraphs, for example — .
3. Once you have the list of fonts, you can fetch this last JSON from the service that gives you information about the fonts.

Now your project knows where to get the fonts. Now its time to download them and make them work in your project.

## useFonts

Let’s split this part in two:

### FontFace API

Thankfully, there is a Web API that will save the day for us. The FontFace API allow us to define a new font-face object using JavaScript — works just like the @font-face rule for CSS, but with some helpful methods — .

For creating a new FontFace object, we must know the family, the URL where the font can be downloaded from and some font configuration options like weight or style.

You can see here more information about the [FontFace API](https://developer.mozilla.org/en-US/docs/Web/API/FontFace) and compare it with the [traditional way of using font-faces with CSS](https://internetingishard.netlify.app/html-and-css/web-typography/index.html).

Following the structure of the JSON we got from the service, we can define one FontFace object for each variant like this:

```js
const fontFaces = fonts.map((font) => {
  return new FontFace(font.family, `url(${font.url})`, font.options);
});
```

With the objects created, we can now define a function to load a fontFace and then add that font to the document:

```js
async function loadFontFace(fontFace) {
  const loadedFont = await fontFace.load();
  document.fonts.add(loadedFont);
}
```

This function is asynchronous because the load methods returns a promise that is resolved when the fontFace gets loaded.

With these two elements, we can now create our custom hook.

### useFonts() hook

Good, lets make this hook receive as an argument the fonts to load, so, using what we have up until now the hook would look like this:

```js
import { useState, useEffect } from "react";

function useFonts(fonts) {
  const [fontFaces] = useState(
    fonts.map((font) => {
      return new FontFace(font.family, `url(${font.url})`, font.options);
    }),
  );

  async function loadFontFace(fontFace) {
    const loadedFont = await fontFace.load();
    document.fonts.add(loadedFont);
  }

  useEffect(() => {
    fontFaces.forEach((fontFace) => {
      loadFontFace(fontFace);
    });
  }, [fontFaces]);
}

export { useFonts };
```

The point here is that we can re-render the interface if there is a change related to the fontFaces state.

Then you can just use the hook in the root part of the project:

```js
import { Text } from "./components/Text";
import { ThemeProvider } from "styled-components";
import { useFonts } from "./hooks/useFonts";

function App() {
  const theme = {};
  const fonts = [];
  /* fetch theme and set it */
  /* fetch fonts information */

  useFonts(fonts);

  return (
    <ThemeProvider theme={theme}>
      <Text as="label" type="label" size="large">
        Hello World
      </Text>
    </ThemeProvider>
  );
}

export default App;
```

Since the loading of fonts can take some times — usually ms — I recommend you to also have a default and similar font that is already in the browser. This prevents that the user gets to see an abrupt change in the screen once the fonts are loaded.

This default font can be defined per client using the corresponding token. For example: **acme.typography.label.large.font = “Open Sans, Arial, sans-serif”**.

With this system, I extended the use of BEM tokens to work with typography and also allowed the project to dynamically load fonts depending on the client that is using the product.

Hope this experience is useful for you.

Thanks for reading!
