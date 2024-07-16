import imgperson from "../../media/images/student.png";
import { SubTestimonial } from "./SubTestimonial";
export const Testimonial = () => {
  return (
    <>
    <div className="flex justify-center my-5 text-4xl font-extrabold text-blue-500 md:text-5xl">
        Student Testimonial
    </div>
      <div class=" w-[94%] flex flex-col sm:flex-row justify-center mx-auto gap-5">
        <SubTestimonial
          studentimg={imgperson}
          descrip={"bdxasbdx asbdhabdhas sbdahsbd"}
          stdname={"Student 1"}
        />
        <SubTestimonial
          studentimg={imgperson}
          descrip={"bdxasbdx asbdhabdhas sbdahsbd"}
          stdname={"Student 2"}
        />
        <SubTestimonial
          studentimg={imgperson}
          descrip={"bdxasbdx asbdhabdhas sbdahsbd"}
          stdname={"Student 3"}
        />
      </div>
    </>
  );
};
