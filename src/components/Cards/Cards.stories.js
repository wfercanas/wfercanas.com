import { HeroCard } from ".";
import image from "../../../assets/images/sticky-notes-medium.jpg";

export default {
  title: "Components / Cards",
  components: HeroCard,
};

export const Hero = (args) => {
  return <HeroCard {...args} />;
};

Hero.args = {
  title: "Be a startup again when trying to innovate with a new product",
  date: "10/06/2022",
  image,
  alt: "A group working together on a table and a whiteboard with sticky notes",
  figcaption: "Photo by Jason Goodman on Unsplash",
};
