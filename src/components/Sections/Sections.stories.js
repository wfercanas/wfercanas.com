import { Section } from ".";

export default {
  title: "Sections",
  components: Section,
};

export const Primary = (args) => {
  return <Section {...args} />;
};
Primary.args = {
  label: "Latest articles",
  divider: true,
};
