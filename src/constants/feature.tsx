import {
  Delivery,
  Idea,
  Money,
  Satisfaction,
  Supporttime,
} from "../components/custom/index";

export const features = [
  {
    Icon: Delivery,
    name: "On time Delivery",
    description: "We delivery the quality you need on time.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/companyicon/ontimedelivery.svg"
        className="absolute w-full -top-1 hidden lg:block"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-1 ",
  },
  {
    Icon: Idea,
    name: "Dedicated project manager",
    description: "Lorem lorem Lorem lorem Lorem lorem ",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    // className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    className: "lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Supporttime,
    name: "24 x 7 round the clock support",
    description: "Lorem lorem Lorem lorem Lorem lorem ",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/companyicon/support.svg"
        className="absolute w-full hidden lg:block"
      />
    ),
    className: "lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Satisfaction,
    name: "100% Customer satisfaction",
    description:
      "Our top priority is ensuring every customer leaves with a smile.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/companyicon/satisfaction.svg"
        className="absolute blur-0 w-full -top-1 hidden lg:block"
      />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Money,
    name: "Escrow account keeping your money safe",
    description: "lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60 " />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
];

export const partnerBenefitBentoGrid = [
  {
    // Icon: Delivery,
    name: "Fast MVP Development",
    description:
      "We develop the prototypes and MVP for the ERP System within a few months and optimise the final product based on its performance metrics and your feedback.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/images/mvpdevelopment.png"
        className="absolute w-full -top-1 hidden lg:block"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-1",
  },

  {
    // Icon: Delivery,
    name: "Maintainance & support",
    description:
      "Our work does not end with delivery. We offer complete support and maintenance post the launch of the ERP systems to ensure their smooth functioning.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/images/maintainance.png"
        className="absolute w-full -top-1 hidden lg:block"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-2",
  },

  {
    // Icon: Delivery,
    name: "Smooth ERP Intergration",
    description:
      "We ensure smooth ERP integration with other business parts, including other ERPs, Salesforce, Office Suite, and IoT systems, for effective, seamless business operations.",
    href: "/",
    cta: "Learn more",
    background: (
      <img
        src="/images/smoothIntegration.png"
        className="absolute w-full -top-1 hidden lg:block"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-3 ",
  },
];

export const boardingCardData = [
  {
    icon: <img src="/gif/pencil.gif" alt="Signup" className="w-9" />,
    heading: "Free sign-up",
    step: "Step 1",
    description:
      "Register on our Partner Dashboard and have your contact details verified instantly.",
  },
  {
    icon: <img src="/gif/system.gif" alt="Profile" className="w-9" />,
    heading: "Profile setup",
    step: "Step 2",
    description: "Access your personalised dashboard to complete your profile.",
  },
  {
    icon: <img src="/gif/folder.gif" alt="Work" className="w-9" />,
    heading: "Showcase your work",
    step: "Step 3",
    description:
      "Upload your portfolio and past work examples to attract clients to your profile.",
  },
  {
    icon: <img src="/gif/double-check.gif" alt="Check" className="w-9" />,
    heading: "Start Working",
    step: "Step 4",
    description:
      "Get verified by our team and easily manage your work through our Partner Dashboard.",
  },
];
