import NumberTicker from "../magicui/number-ticker";
const business = [
  {
    icon: "/companyicon/software.svg",
    title: "Software",
    type: "industry",
  },
  {
    icon: "/companyicon/cyber.svg",
    title: "Cybersecurity Solutions",
    type: "Service Provided",
  },
  {
    icon: "/companyicon/People.svg",
    title: "200 - 500",
    type: "Company Size",
  },
];
const HeroCaseStudy = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-[85%] relative flex flex-col-reverse lg:flex-row items-center justify-between gap-2 mx-auto">
        <div className="flex flex-col items-start justify-start w-full lg:w-[45%] h-[30rem]">
          <h1 className="text-xl lg:text-4xl font-bold">
            How cybersecurity solutions helped an insurance company.
          </h1>
          <p className="text-lg mt-5">
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page, or admin panel for your SaaS.
            Clarity gives you the blocks & components you need. Clarity gives
            you the blocks.
          </p>
          <div className="mt-5 flex items-center justify-center gap-4">
            {business.map((data, i) => (
              <div
                className="flex items-center justify-center gap-3"
                key={`key-${i}`}>
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <img src={data.icon} alt="image" />
                </div>
                <div className="flex-1 h-full flex flex-col items-start justify-start">
                  <h2 className=" font-semibold text-center text-nowrap text-teal-800">
                    {data.title}
                  </h2>
                  <p className="text-nowrap text-gray-500">{data.type}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full relative h-96 p-2 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full flex flex-col p-5">
              <div className="relative left-0 flex justify-center w-full">
                <div>
                  <p className="text-3xl font-bold">
                    <NumberTicker value={76} direction="up" />%
                  </p>
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-center w-full text-gray-500">
                Better Data Protection
              </div>
            </div>
            <div className="w-full flex flex-col p-5">
              <div className="relative left-0 flex justify-center w-full">
                <div>
                  <p className="text-3xl font-bold">
                    <NumberTicker value={50} direction="up" />%
                  </p>
                </div>
              </div>
              <div className="mt-4 text-sm text-center font-semibold w-full text-gray-500">
                Improve in <p className="text-nowrap">Regulatory Compliance</p>
              </div>
            </div>
            <div className="w-full flex flex-col p-5">
              <div className="relative left-0 flex justify-center w-full">
                <div>
                  <p className="text-3xl font-bold">
                    <NumberTicker value={25} direction="up" />%
                  </p>
                </div>
              </div>
              <div className="mt-4 text-sm text-center font-semibold w-full text-gray-500">
                Phishing <p>Migration</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 w-full lg:w-[40%]">
          <img src="/images/hero.png" alt="heroimage" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroCaseStudy;
