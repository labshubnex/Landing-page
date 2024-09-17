import { Button } from "../../ui/button";
import Flag from "../Flag";

const Location = () => {
  return (
    <div className="w-full h-screen my-16 flex items-center justify-center">
      <div className="w-full lg:w-[70%] lg:h-[70%] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[55%] h-full flex flex-col items-start justify-start p-4 lg:p-0">
          <h1 className="text-2xl lg:text-4xl font-semibold mt-2 mb-6">
            Our Locations
          </h1>
          <div className="w-full flex items-center justify-start gap-3 overflow-auto p-2">
            <Flag country="IND" img="/images/india.png" isFirst />
            <Flag country="UAE" img="/images/uae.png" />
            <Flag country="USA" img="/images/usa.png" />
            <Flag country="INDO" img="/images/indo.png" />
          </div>
          <div className="w-full flex items-center justify-start  p-2 gap-3 text-lg font-semibold mt-5">
            <a href="#" className="underline text-indigo-500">
              Gurugram
            </a>
            <a href="#">Bangalore</a>
            <a href="#">Pune</a>
            <a href="#">Lucknow</a>
          </div>
          <div className="w-full flex flex-col items-start justify-start mt-5 gap-4">
            <div className="flex items-center justify-start gap-3">
              <img src="/icons/location.svg" alt="location" />
              <p className="font-base text-black/50 text-xl ">
                Etihad Airways Centre, Al Rahah, Al Muneera, Abu Dhabi, UAE
              </p>
            </div>
            <div className="flex items-center justify-start gap-3">
              <img src="/icons/mail.svg" alt="location" />
              <p className="font-base text-black/50 text-xl ">
                hello@hubnex.in
              </p>
            </div>
            <div className="flex items-center justify-start">
              <img src="/icons/phone.svg" alt="location" />
              <p className="font-base text-black/50 text-xl ">+91 1223432544</p>
            </div>
            <Button className="bg-blue-700">Contact Us</Button>
          </div>
        </div>
        <div className="w-full lg:w-[40%] h-full p-4">
          <img
            src="/images/location.png"
            alt="location"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
