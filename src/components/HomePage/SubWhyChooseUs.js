export const SubWhyChooseUs=({imgname, title})=>{
    return(
        <div className="h-auto rounded-lg my-1 bg-slate-100 shadow-gray-300">
            <img src={imgname} class="w-full h-auto rounded-lg shadow-md" alt=""/>
            <p class="text-center mt-2 hover:text-blue-500">{title}</p>
        </div>
    )
}