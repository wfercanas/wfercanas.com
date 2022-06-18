import { Blanket } from ".";

export default {
  title: "Components / Blankets",
  components: Blanket,
};

export const Contact = ({ args }) => {
  return <Blanket {...args} />;
};

Contact.args = {};
