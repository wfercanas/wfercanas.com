import { ArticleCard, HeroCard } from ".";

export default {
  title: "Components / Cards",
  components: [HeroCard, ArticleCard],
};

export const Hero = (args) => {
  return <HeroCard {...args} />;
};

Hero.args = {
  title: "Be a startup again when trying to innovate with a new product",
  date: "10/06/2022",
  image: "/v1655517912/wfercanas.com/sticky-notes_wpowei.jpg",
  alt: "A group working together on a table and a whiteboard with sticky notes",
  figcaption: "Photo by Jason Goodman on Unsplash",
  showCaption: true,
};

export const Article = (args) => {
  return <ArticleCard {...args} />;
};

Article.args = {
  title: "Listen and lead as basis for creating awesome products",
  date: "01/06/2022",
  image: "/v1655517912/wfercanas.com/sticky-notes_wpowei.jpg",
  alt: "Many cups of coffee on top of a table where people are working with papers",
  categories: [{ id: 0, attributes: { name: "Product Manager" } }],
};
