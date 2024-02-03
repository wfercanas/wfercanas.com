I’ve been working on building from scratch a design-system and tokenization has been quite hard to grasp. After trying some structures — i.e. [Material Design](https://m3.material.io/styles/color/the-color-system/tokens) or [Atlassian Design System](https://atlassian.design/tokens) — , I decided to take some ideas from them and define a new token structure that can be easier to follow.

Let me show you using **colors**.

Let’s start by explaining the structure of the tokens. The tokens are built using the following building blocks:

- Domain
- Block
- Element
- Modifier

So, a token is the connection between them in the form: **domain.block.element.modifier**.

Examples of this could be **color.surface.warning.regular** or **typography.body.large.regular**.

## Domain

The domain part of the token allows you to access the pilars of the design-system, its foundations. There you can find domains such as color, typography or spacing.

## BEM

The other parts of the tokens are related with a BEM structure (Block-Element-Modifier). This is originally an approach to work with CSS classes. With BEM we have a consistent way of styling our components, particularly in projects that start growing in size. [See more](https://getbem.com/introduction/).

A **block** should be meaningful on its own. Applied to CSS classes it could be a `header` or a `nav`.

An **element** should be tied to its block, because it is meaningless on its own. Continuing with the previous examples, the element could be a logo or a link but tied to their blocks like `header logo` or `nav link`.

Finally, we have the **modifier**. Their role is to change an element, so that it can be displayed in different ways depending on its context. You can think of them like CSS pseudo-classes. So, in the example of the `nav link`, we can have it in its regular, hovered or selected states: `nav link regular`, `nav link hover` or `nav link select`.

## Color Tokens

### Palette

Focusing on the color domain, the first **block** to define is the Palette block. Here we will create the universe of colors to use in the design-system.

For this domain, the **elements** are the group of colors we want to use. Particularly, we created these groups following the [Atlassian structure for colors](https://atlassian.design/foundations/color-new/color-palette-new/): yellow, green, blue, teal, purple, red, neutral (which is just a grayscale).

For each element, that is, a color group, we define different combinations of colors related to that group — **modifiers** — . Here we also opted to use the color system proposed by Atlassian coding each color with an alphanumeric reference. The result for the blue element looks like this:

<figure>
<img src="https://res.cloudinary.com/wfercanas/image/upload/v1706985112/wfercanas.com/articles/230623/palette.webp">
<figcaption>Token parts and values for a blue element</figcaption>
</figure>

So, in terms of tokens, the **color.palette.blue.b500** token equals the HEX color #0747A6.

You can do the same for the rest of elements (yellow, red, green, etc.).

In the case of the neutral element, I also sticked to the graduation Atlassian makes. I created way more modifiers, ranging from N900 to N100 in decrements of 100, and from N90 to N0 in decrements of 10.

### Texts

Now that the palette is defined, it is possible to continue with other interesting blocks for the color domain. Let’s see the **text** block.

The tokens defined here apply to any text inside the products developed using this design-system. Let’s see:

- Domain: color.
- Block: text.
- Elements: primary, success, error, warning, information, help, link, and so on.
- Modifiers: regular, hover, disabled, crossed, and so on.

With this structure, the tokens for primary and success texts could look like this:

<figure>
<img src="https://res.cloudinary.com/wfercanas/image/upload/v1706985281/wfercanas.com/articles/230623/text.webp">
</figure>

### New blocks and elements

This structure can be repeated for other blocks as well. You can use it for **color.strokes** and **color.surfaces**, for instance.

For each block, you can define the same set of elements — primary, success, error, warning — , or include some new ones — I eventually added the dark, gray and light elements to all blocks (including text) — .

### Entities

The design system I’m creating should be customized by our clients. This means that although we develop a unique app which implements the design-system, this app should be deployed for each of our clients, and each one those deploys should have the look and feel of the respective client aesthetics.

This is a key requirement since the app will end up being used by the customers of our clients, and these customers should log in and feel like they are in our client’s app.

So, for this case, we added a new building block to the token structure, using the client name as an entity that prefixes the tokens. So, the universe of colors for ACME can be referenced by using **acme.color.palette…**., and the universe of colors for LEXCORP through **lexcorp.color.palette…**.

If you find yourself in this situation or if the aesthetics depends on some other variable, you can replace the entity attribute for another one. For instance, if you develop multiple apps and each one of them should have their own theme, you can append the theme attribute or even the app name.

## Components

In order to illustrate how do the tokens impact a component, lets see two `<Flag />` components where the color tokens are used:

<figure>
<img src="https://res.cloudinary.com/wfercanas/image/upload/v1706985280/wfercanas.com/articles/230623/components.webp">
</figure>

<figure>
<img src="https://res.cloudinary.com/wfercanas/image/upload/v1706996573/wfercanas.com/articles/230623/components2.webp">
</figure>

## Conclusion

I will be using this structure for building a design-system that works for multiple clients.

In the case of colors, each client will be able to define their own palette and with the palette, add semantics to texts, strokes, surfaces and more so that their deployed app looks like their own.

For colors and other domains, the idea is to keep the BEM structure. Perhaps typography, spacing, border, or elevation domains present new challenges in terms of how to make them work within this structure, but I think it is possible to find a way.

Reusing this template for tokens, in my opinion, is way easier to work with than some other options you may find around.

I’ll be posting about how do this work goes and also some analysis about why the other options didn’t work for me.

See ya!
