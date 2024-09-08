interface IProp {
  title: string;
  description: string[];
  content: {
    title: string;
    description: string[];
  }[];
}
const PolicyContent = ({ title, description, content }: IProp) => {
  return (
    <div className="w-full p-10">
      <div className="w-full lg:w-[80%] mx-auto text-center">
        <h1 className="text-2xl lg:text-5xl font-semibold pb-3 border-b-2 border-black inline-block my-2">
          {title}
        </h1>
        {description.map((line, i) => (
          <p className="text-left my-4  font-normal" key={`key-${i}`}>
            {line}
          </p>
        ))}
      </div>
      <div className="w-full lg:w-[80%] mx-auto text-center flex flex-col items-center justify-center">
        {content.map((section, i) => (
          <div key={`section-${i}`} className="w-full text-left">
            <h1 className="text-2xl lg:text-4xl font-semibold pb-3 my-4">
              {section.title}
            </h1>
            {section.description.map((line) => (
              <p className="text-left my-4  font-normal" key={`key-${i}`}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyContent;
