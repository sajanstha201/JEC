import { SubWhyChooseUs } from "./SubWhyChooseUs";
import uniimg from '../../media/images/uniimg.jpg'

export const WhyChooseUs = () => {
  return (
    <div className="md:mt-[6rem]">
      <div className="w-[94%] mx-auto flex justify-between md:flex-row flex-col">
        {/* <!-- why choose us text --> */}
        <div className="md:w-[40%] w-full md:mt-28 md:mb-0">
          <h1 className="why-choose text-5xl text-blue-600 font-bold">
            Why Choose <span className="text-red-700 font-bold">JEC</span>
          </h1>
          <p className="text-slate-800 text-lg">
            Our college offers three undergraduate programs in Civil
            Engineering,{" "}
            <span className="text-red-700">Computer Engineering</span>, and{" "}
            <span className="text-red-700">
              Electronics and Information Engineering
            </span>
            , providing students with a well-rounded education
          </p>
          <button className="px-3 py-2 text-xl text-blue-500 hover:bg-blue-500 hover:text-white ease-in duration-100 border border-blue-500 my-1">
            MORE ABOUT JEC
          </button>
        </div>
        <div className="md:w-[60%] w-full flex flex-wrap md:flex-nowrap justify-between md:gap-9">
            <div class="w-full md-w-[48%] mb-4 md:mb-0">
                <SubWhyChooseUs imgname={uniimg} title={'Scholarship Scheme'} />
                <SubWhyChooseUs imgname={uniimg} title={'Scholarship Scheme'} />
            </div>

            <div class="w-full md-w-[48%] md:mt-24 ">
                <SubWhyChooseUs imgname={uniimg} title={'Scholarship Scheme'} />
            </div>
        </div>
      </div>
    </div>
  );
};
