import { ContactInput } from ".";
import { Blanket } from "../Blankets";

export default {
  title: "Components / Inputs",
  components: ContactInput,
};

export const Contact = (args) => {
  return (
    <Blanket>
      <ContactInput {...args} />
    </Blanket>
  );
};

Contact.args = {
  type: "email",
  placeholder: "Name",
  required: true,
};
