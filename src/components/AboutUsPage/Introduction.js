const textStyle = {
  textShadow: `
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000`,
};

export const Introduction = () => {
  return (
    <>
      <div className="lg:w-[70%] w-[96%] mx-auto ">
      <div className="text-blue-500 md:text-3xl text-2xl font-bold text-left">
        <h1 className="flex justify-center items-center my-3 md:justify-start">
          ABOUT  <span className="text-white" style={textStyle}> JEC</span>
        </h1>
      </div>
      <div>
        <p>
          <h2 className="text-lg font-semibold text-black lg:text-left">
            Janakpur Engineering College (JEC), under the affiliation of Tribhuvan University, <span className="text-gray-700">has been conducting Bachelors in Engineering Courses since 2058 B.S in Civil Engineering, Electronics & Information Engineering and Computer Engineering.</span>
          </h2>
        </p>
        <p className="text-base md:flex text-black lg:text-left">
          JEC is a comprehensive higher education institution, fulfilling a national and international role in providing full-time and part-time programs across the whole spectrum of higher education, supported by research and scholarship in areas reflective of the Institute’s mission. IT aims to achieve this in an innovative, responsive, caring and flexible learning environment with state-of-the-art facilities and the most advanced technology available.
        </p>
      </div>
    </div>

    </>
  );
};
