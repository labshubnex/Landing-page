import { cardData, progressDataCaseStudies } from "../../../constants";
import Card from "../Card";
import { ProgressBar } from "../ProgressBar";

const Bussiness = () => {
  return (
    <div className="w-full h-auto my-10">
      <div className="w-[85%] mx-auto">
        <div className="w-full text-left">
          <h1 className="text-3xl font-semibold text-left my-3">
            Business Challenge
          </h1>
          <p className="text-left text-base text-gray-500">
            One major problem they identified was the heightened risks of data
            breaches and unauthorized access to sensitive customer information,
            including personal and financial data. This was further exaggerated
            by the possibilities of increasingly sophisticated phishing and
            social engineering attacks targeting employees and customers, posing
            risks of credential theft and fraud. Another threat looming over the
            business was the growing prevalence of ransomware and malware
            attacks that had the potential to disrupt business operations and
            compromise data integrity and availability.
          </p>
        </div>
        <div className="w-full text-left mt-9">
          <h1 className="text-3xl font-semibold text-left my-3">
            Our Solution
          </h1>
          <p className="text-left text-base text-gray-500">
            After a detailed discussion of the brand’s concerns we understood
            the critical importance of implementing cybersecurity measures in
            safeguarding sensitive customer data, maintaining regulatory
            compliance, and preserving brand reputation.
          </p>
        </div>
        <div className="w-full flex gap-2 my-10">
          {cardData.map((card) => (
            <Card
              definition={card.definition}
              number={card.number}
              title={card.title}
              isActive={card.isActive}
              key={card.number}
            />
          ))}
        </div>
        <div className="w-full text-left mt-9">
          <h1 className="text-3xl font-semibold text-left my-3">Impact</h1>
          <p className="text-left text-base text-gray-500">
            We were successful in the development and deployment of the app
            before the planned timeline and supported their vision of making
            mental health more accessible to their patients, minus the hassles.
          </p>
        </div>
        <div className="w-full flex flex-col relative">
          {progressDataCaseStudies.map((data) => (
            <div className="flex items-center justify-between gap-4 my-8">
              <ProgressBar initialValue={data.value} />
              <div className="flex-1 h-full">
                <h1 className="text-lg font-semibold my-2">{data.title}</h1>
                <p className="text-sm">{data.about}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full text-left mt-9">
          <h1 className="text-3xl font-semibold text-left my-3">Conclusion</h1>
          <p className="text-left text-base text-gray-500">
            We continue to deliver robust cybersecurity solutions to their team
            to mitigate cyber risks and enhance cyber resilience in the
            insurance industry. We hope leveraging our cybersecurity solution
            helps the client stand true to their commitment to their customers
            on delivering a secure and resilient digital future with them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
