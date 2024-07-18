const textStyle = {
  textShadow: `
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000`,
};
export const ObjGoalSection = () => {
  return (
    <>
      <div className="flex md:[80%] flex-col lg:flex-row justify-around items-center w-full mx-auto text-lg py-5 text-center lg:text-left">
        <div className="obj-section w-full lg:w-2/5 p-4 lg:mt-[1rem] bg-slate-50">
          <span className="text-white bg-blue-500 px-4 py-2 block lg:inline-block rounded-lg">
            JEC OBJECTIVES
          </span>
          <h1 className="text-white md:text-xl text-base font-bold"style={textStyle}>
            MISSION
          </h1>
          <div className="w-full mx-auto">
            <p className="md:text-lg text-base text-center font-sans md:text-left">
              Our vision at Janakpur Engineering College is to be a leading
              institution for engineering education and research, providing our
              students with the knowledge, skills, and experience they need to
              succeed in their careers. We aim to be a top choice for aspiring
              engineers, offering innovative and comprehensive programs in civil
              engineering, computer engineering, and electronics and information
              engineering.
            </p>
          </div>
        </div>

        <div className="Goal-section w-full lg:w-2/5 p-4 lg:mt-[1rem] bg-slate-50">
          <span className="text-white bg-blue-500 px-4 py-2 block lg:inline-block rounded-lg">
            JEC GOALS
          </span>
          <h1 className="text-red-600 text-base font-bold" >VISION</h1>
          <div className="w-full mx-auto">
            <p className="text-base md:text-lg text-center font-sans md:text-left">
              Our vision at Janakpur Engineering College is to be a leading
              institution for engineering education and research, providing our
              students with the knowledge, skills, and experience they need to
              succeed in their careers. We aim to be a top choice for aspiring
              engineers, offering innovative and comprehensive programs in civil
              engineering, computer engineering, and electronics and information
              engineering.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
