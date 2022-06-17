import { ArticleCard, HeroCard } from ".";
import mediumImage from "../../../assets/images/sticky-notes-medium.jpg";
import smallImage from "../../../assets/images/sticky-notes-small.jpg";

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
  image: mediumImage,
  alt: "A group working together on a table and a whiteboard with sticky notes",
  figcaption: "Photo by Jason Goodman on Unsplash",
};

export const Article = (args) => {
  return <ArticleCard {...args} />;
};

Article.args = {
  title: "Listen and lead as basis for creating awesome products",
  date: "01/06/2022",
  image: smallImage,
  alt: "Many cups of coffee on top of a table where people are working with papers",
};
