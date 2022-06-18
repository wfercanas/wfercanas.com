import { SubmitButton } from ".";

export default {
  title: "Components / Buttons",
  components: SubmitButton,
};

export const Submit = (args) => {
  return <SubmitButton {...args} />;
};

Submit.args = {
  label: "Send",
};
