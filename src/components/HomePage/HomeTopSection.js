import vid from "../../media/images/jec.mp4";
import logo from "../../media/images/jec-logo.png";
export const HomeTopSection = () => {
  return (
    <>
      <header className="h-full w-full text-2xl">
        <div className="relative h-[65%]">
          <video className="w-full h-[60vh] object-cover -z-10" autoPlay muted>
            <source src={vid} type="video/mp4" />
          </video>

          {/* Admission text and login button */}
          <div className="absolute bottom-0 left-0 md:top-0 md:left-auto md:right-4 md:bottom-auto md:w-1/3 p-4 text-center md:text-left">
            <div className="admission text-white p-4 rounded-md md:mt-20 md:static md:text-left text-center mt-[7rem]">
              <h1 className="text-3xl font-bold text-center">ADMISSION OPEN</h1>
              <p className="text-lg text-center md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                quidem odit temporibus illum non, placeat dicta rerum natus.
                Corrupti
              </p>
              <div className="flex justify-center md:justify-center">
                <a href=""
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 m-2 rounded-lg text-2xl"
                >
                  LOGIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
