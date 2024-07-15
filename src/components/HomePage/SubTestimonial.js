export const SubTestimonial=({studentimg, descrip, stdname})=>{
    return(
        <div class="testimonial-card w-full md:w-1/3 bg-gray-100 rounded-lg">
            <div class=" flex justify-center items-center rounded-xl">
                <img src={studentimg} alt="student" class="h-64 w-48"/>
            </div>
            <p class="text-slate-900 font-serif text-lg text-center">{descrip}</p>
            <span class="font-semibold text-lg text-center">{stdname}</span>
        </div>
    )
}