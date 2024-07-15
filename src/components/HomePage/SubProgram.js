export const SubProgram=({image,seatNo,programTopic,link})=>{
return(
    <div className="course1 relative bg-transparent-black my-2 md:w-1/3">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <h2 className="flex justify-center text-2xl font-sans font-semibold text-white md:text-black">
            {programTopic}
          </h2>
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="seat-button ">
            <button className="bg-blue-500 px-3 py-2 text-white absolute top-4 right-0">
              {seatNo} Seates
            </button>
          </div>
          {/* <!-- learn more about course button --> */}
          <div className="flex justify-center items-center">
            <a  href={link} className="bg-blue-500 text-white px-3 py-2 my-2 hover:bg-blue-600">
              Learn More
            </a>
          </div>
    </div>
)
}