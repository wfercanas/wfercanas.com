import { MoreAnchor } from ".";

export default {
  title: "Components / Anchors",
  components: MoreAnchor,
};

export const More = (args) => {
  return <MoreAnchor {...args} />;
};

More.args = {
  label: "More articles",
  href: "https://www.google.com",
};
