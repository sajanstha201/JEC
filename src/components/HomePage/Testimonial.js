import imgperson from '../../media/images/student.png'
import { SubTestimonial } from './SubTestimonial'
export const Testimonial=()=>{
    return(
        <div class=" w-[94%] flex flex-col sm:flex-row justify-center mx-auto gap-5">
        <SubTestimonial studentimg={imgperson} descrip={'bdxasbdx asbdhabdhas sbdahsbd'} stdname={'Student 1'}/>
        <SubTestimonial studentimg={imgperson} descrip={'bdxasbdx asbdhabdhas sbdahsbd'} stdname={'Student 2'}/>
        <SubTestimonial studentimg={imgperson} descrip={'bdxasbdx asbdhabdhas sbdahsbd'} stdname={'Student 3'}/>
    </div>
    )
}