import { ContactForm } from ".";
import { Blanket } from "../Blankets";

export default {
  title: "Components / Forms",
  components: ContactForm,
};

export const Contact = (args) => {
  return (
    <Blanket>
      <ContactForm {...args} />
    </Blanket>
  );
};

Contact.args = {};
