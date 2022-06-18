import { ContactTextarea } from ".";
import { Blanket } from "../Blankets";

export default {
  title: "Components / Inputs",
  components: ContactTextarea,
};

export const Textarea = (args) => {
  return (
    <Blanket>
      <ContactTextarea {...args} />
    </Blanket>
  );
};

Textarea.args = {
  placeholder: "Message",
  required: true,
  maxlength: 220,
};
