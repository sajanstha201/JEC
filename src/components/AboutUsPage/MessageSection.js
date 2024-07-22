import chairpersonimg from "../../media/images/chairman.jpg";
import principalimg from "../../media/images/principal.jpg";
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
      <div className="w-[96%] md:w-4/5 mx-auto px-10 mt-16 mb-5">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-4xl font-bold text-blue-500">
            What our faculty says?
          </h1>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-around gap-10 lg:text-left">
          <img
            src={chairpersonimg}
            className="h-80 rounded-lg w-80"
            alt="Chairman"
          />
          <div>
            <h1 className="text-red-600 text-xl font-bold">
              CHAIRMAN <span className="" style={textStyle}></span> MESSAGE
            </h1>
            <h1 className="text-gray-800 text-lg font-semibold">
              DR. ARJUN KR. SINGH
            </h1>
            <p className="text-base md:text-lg text-center font-sans md:text-left">
              It is both an exciting and challenging time as we all continue
              this educational journey together. I first want to say how proud I
              am of the staff, students, and parents of JEC for their collective
              response to the challenging circumstances all of us faced this
              year due to the COVID-19 pandemic. As we all know, our country,
              Nepal, is going through very challenging but interesting times
              socially as well as economically.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-around gap-10 mt-10 lg:text-left">
          <div>
            <h1 className="text-red-600 text-xl font-bold">
              PRINCIPAL <span className="" style={textStyle}></span> MESSAGE
            </h1>
            <h1 className="text-gray-800 text-lg font-semibold">
              ER. SAGAR SHRESTHA
            </h1>
            <p className="text-base md:text-lg text-center font-sans md:text-left">
              It is both an exciting and challenging time as we all continue
              this educational journey together. I first want to say how proud I
              am of the staff, students, and parents of JEC for their collective
              response to the challenging circumstances all of us faced this
              year due to the COVID-19 pandemic. As we all know, our country,
              Nepal, is going through very challenging but interesting times
              socially as well as economically.
            </p>
          </div>
          <img
            src={principalimg}
            className="h-80 w-80 rounded-lg"
            alt="Principal"
          />
        </div>
      </div>
    </>
  );
};
