import { BreadcrumbWithCustomSeparator } from "../components/custom/BreadScrum";
import Hero from "../components/custom/Contacts/Hero";
import LocationInfo from "../components/custom/Contacts/LocationInfo";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Partners",
    to: "/partners",
    active: true,
  },
];

const Contact = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-[85%] mx-auto p-3">
        <BreadcrumbWithCustomSeparator links={links} />
      </div>
      <Hero />
      <LocationInfo />
    </div>
  );
};

export default Contact;
