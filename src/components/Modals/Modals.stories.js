import { ContactModal } from ".";

export default {
  title: "Components / Modals",
  components: ContactModal,
};

export const Contact = (args) => {
  return <ContactModal {...args} />;
};

Contact.args = {};
