import { SubProgram } from "./SubProgram";
import civilImg from "../../media/images/civil.jpg";
import beImg from "../../media/images/computer.jpg";
import elecImg from "../../media/images/electronics.jpg";
export const Program = () => {
  return (
    <div className="">
      <div className="course-titles flex justify-center my-5 text-4xl font-extrabold text-blue-500 md:text-5xl">
        Academic Programs
      </div>

      <div className="course-desc w-[94%] flex flex-col sm:flex-row justify-center mx-auto gap-6">
        <SubProgram image={civilImg} seatNo={96} programTopic={"Civil Engineering"} link={"www.google.com"} />
        <SubProgram image={beImg} seatNo={48} programTopic={"B.E Computer"} link={"www.facebook.com"} />
        <SubProgram image={elecImg} seatNo={48} programTopic={"Electronic Engineering"} link={""} />
      </div>
    </div>
  );
};
