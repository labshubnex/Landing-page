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
