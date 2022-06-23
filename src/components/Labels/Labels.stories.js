import { CategoryLabel } from ".";

export default {
  title: "Components / Labels",
  components: CategoryLabel,
};

export const Category = (args) => {
  return <CategoryLabel {...args} />;
};

Category.args = {
  label: "Product Manager",
};
