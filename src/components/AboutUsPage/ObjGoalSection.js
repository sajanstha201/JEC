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
      <div className="flex flex-col lg:flex-row justify-around items-center w-full mx-auto text-2xl mt-5 py-12 bg-slate-100">
        <div className="Obj-section w-full lg:w-2/6 mb-5 lg:mb-0">
          <span className="text-white bg-blue-500 px-4 py-2 my-5 block lg:inline-block">
            JEC OBJECTIVES
          </span>
          <h1 style={textStyle} className="text-white md:text-3xl text-2xl font-bold my-3">
            MISSION
          </h1>
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

        <div className="Goal-sectio w-full lg:w-2/6">
          <span className="text-white bg-blue-500 px-4 py-2 my-5 block lg:inline-block">
            JEC GOALS
          </span>
          <h1 className="text-red-600 md:text-3xl text-2xl font-bold my-3">VISION</h1>
          <div className="w-full mx-auto">
            <p className=" md:text-3xl text-xl text-center font-sans md:text-left">
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
