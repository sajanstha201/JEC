import chairpersonimg from '../../media/images/jec-students.jpg'
import principalimg from '../../media/images/electronics.jpg'
const textStyle = {
    textShadow: `
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000`,
  };

  export const MessageSection = () => {
    return (
      <>
        <div className="flex flex-col lg:flex-row justify-around items-center w-full mx-auto text-2xl">
          <div className="Obj-section w-full lg:w-2/6 mb-5 lg:mb-0">
            <h1 style={textStyle} className="text-white md:text-6xl text-3xl font-bold my-3">
              MESSAGE FROM 
            </h1>
            <span className="text-red-600 md:text-6xl text-3xl font-bold md:my-1 sm:justify-end">CHAIRPERSON</span>
            <div className="w-full mx-auto">
              <p className=" md:text-3xl text-xl text-center font-sans md:text-left">
                Our mission at Janakpur Engineering College is to provide
                high-quality undergraduate engineering education to students from
                all backgrounds. We offer three programs in civil engineering,
                computer engineering, and electronics and information engineering,
                with the goal of preparing our graduates for successful careers in
                these fields.
              </p>
            </div>
          </div>
  
          <div className="img-section w-full lg:w-2/6 sm:justify-start">
            <img src={chairpersonimg} alt='chairperson image'/>
          </div>
        </div>

        <div className="flex flex-col md:flex-col-reverse lg:flex-row justify-around items-center w-full mx-auto text-2xl md:mt-[5rem]">
          <div className="img-section w-full lg:w-2/6 sm:justify-start">
            <img src={principalimg} alt='chairperson image'/>
          </div>

          <div className="Obj-section w-full lg:w-2/6 mb-5 lg:mb-0">
            <h1 style={textStyle} className="text-white md:text-6xl text-3xl font-bold my-3">
              MESSAGE FROM 
            </h1>
            <span className="text-red-600 md:text-6xl text-3xl font-bold md:my-1 sm:justify-end">PRINCIPAL</span>
            <div className="w-full mx-auto">
              <p className=" md:text-3xl text-xl text-center font-sans md:text-left">
                Our mission at Janakpur Engineering College is to provide
                high-quality undergraduate engineering education to students from
                all backgrounds. We offer three programs in civil engineering,
                computer engineering, and electronics and information engineering,
                with the goal of preparing our graduates for successful careers in
                these fields.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  