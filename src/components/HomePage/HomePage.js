import civil from "../../media/images/civil.jpg";
import becomputer from "../../media/images/computer.jpg";
import electronics from "../../media/images/electronics.jpg";
import uniimage from '../../media/images/uniimg.jpg';

export const HomePage = () => {
  return (
    <>
    {/* our programs sections */}
      <div className="course-desc w-[94%] flex flex-col sm:flex-row justify-center mx-auto gap-6">
        <div className="course1 relative bg-transparent-black my-2 md:w-1/3">
          <img
            src={civil}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <h2 className="flex justify-center text-2xl font-sans font-semibold text-white md:text-black">
            Civil Engineering
          </h2>
          <div className="desc-course text-white md:text-black md:hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            reiciendis illum cum et rem laborum exercitationem? A minus in quasi
            molestiae doloribus, voluptas, ratione, quas nisi atque est
            obcaecati asperiores!
          </div>
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="seat-button ">
            <button className="bg-blue-500 px-3 py-2 text-white absolute top-4 right-0">
              96 Seates
            </button>
          </div>
          {/* <!-- learn more about course button --> */}
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 text-white px-3 py-2 my-2 hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>

        <div className="course2 relative bg-transparent-black my-2 md:w-1/3">
          <img src={becomputer} alt="" className="w-full h-full object-cover" />
          <h2 className="flex justify-center text-2xl font-sans font-semibold text-white md:text-black">
            B.E Computer
          </h2>
          <div className="desc-course text-white md:text-black md:hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            ullam, nemo facilis iure beatae voluptates. Quas sequi doloribus
            perferendis, accusantium voluptates animi cum neque. Iste excepturi
            explicabo vel esse corporis.
          </div>
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="seat-button ">
            <button className="bg-blue-500 px-3 py-2 text-white absolute top-4 right-0">
              48 Seates
            </button>
          </div>
          {/* <!-- learn more about course button --> */}
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 text-white px-3 py-2 my-2 hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>

        <div className="course3 relative bg-transparent-black my-2 md:w-1/3">
          <img
            src={electronics}
            alt=""
            className="w-full h-full object-cover"
          />
          <h2 className="flex justify-center text-center text-2xl font-sans font-semibold text-white md:text-black">
            B.E Electronics & Information Engineering
          </h2>
          <div className="desc-course text-white md:text-black md:hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            sapiente quia nisi! Porro architecto commodi possimus pariatur!
            Earum voluptate, quae accusantium laboriosam veniam dolorum
            dignissimos aliquid, dolore iusto fugit dolor.
          </div>
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="seat-button ">
            <button className="bg-blue-500 px-3 py-2 text-white absolute top-4 right-0">
              48 Seates
            </button>
          </div>
          {/* <!-- learn more about course button --> */}
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 text-white px-3 py-2 my-2 hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* why choose section */}
      <div className="w-[94%] mx-auto flex justify-between md:flex-row flex-col md:mt-16">
            {/* <!-- why choose us text --> */}
            <div className="md:w-[40%] w-full md:mt-28 md:mb-0">
                <h1 className="why-choose text-5xl text-blue-600 font-bold">Why Choose <span
                        className="text-red-700 font-bold">JEC</span></h1>
                <p className="text-slate-800 text-lg">Our college offers three undergraduate programs in Civil Engineering, <span
                        className="text-red-700">Computer Engineering</span>, and <span className="text-red-700">Electronics and
                        Information Engineering</span>, providing students with a well-rounded education</p>
                <button
                    className="px-3 py-2 text-xl text-blue-500 hover:bg-blue-500 hover:text-white ease-in duration-100 border border-blue-500 my-1">MORE
                    ABOUT JEC</button>
            </div>

            {/* <!-- images section --> */}
            <div className="md:w-[60%] w-full flex flex-wrap md:flex-nowrap justify-between md:gap-9">
                <div className="w-full md-w-[48%] mb-4 md:mb-0">
                    <div className="h-auto rounded-lg my-1 bg-slate-100 shadow-gray-300">
                        <img src={uniimage} className="w-full h-auto rounded-lg shadow-md" alt=""/>
                        <p className="text-center mt-2 hover:text-blue-500">Scholarship Schemes</p>
                    </div>
                    <div className="h-auto rounded-lg my-1 bg-slate-100 shadow-gray-300">
                        <img src={uniimage} className="w-full h-auto rounded-lg shadow-md" alt=""/>
                        <p className="text-center mt-2 hover:text-blue-500">Prime Location</p>
                    </div>
                </div>
                <div className="w-full md-w-[48%] md:mt-24 ">
                    <img src={uniimage}
                        className="w-full h-auto rounded-lg shadow-md my-1 bg-slate-100 shadow-gray-300" alt=""/>
                    <p className="text-center mt-2 hover:text-blue-500">Internship Facilities</p>
                </div>
            </div>
        </div>
    </>
  );
};
