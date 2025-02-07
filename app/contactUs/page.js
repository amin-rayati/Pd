import ContactForm from "@/components/Contact-components/ContactForm";
import ContactInfo from "@/components/Contact-components/ContactInfo";
function page() {
  return (
    <div className="grid grid-cols-12">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}

export default page;
