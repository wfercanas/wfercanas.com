import { Category } from ".";

export default {
  title: "Components / Labels",
  components: Category,
};

export const Primary = (args) => {
  return <Category {...args} />;
};

Primary.args = {
  label: "Product Manager",
};
