import { Spinner } from ".";

export default {
  title: "Components / Spinners",
  components: [Spinner],
};

export const Primary = (args) => {
  return <Spinner {...args} />;
};

Primary.args = {};
