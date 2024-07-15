import logo from '../../media/images/jec-logo.png'
import vid from '../../media/images/jec.mp4'
function Header(){
    return(
        <>
        <header>
        <div className="relative h-[65%] md:h-[66.67%]">
            <video className="w-full h-full object-cover" autoPlay muted>
                <source src={vid} type="video/mp4" />
            </video>

            {/* Top bar section */}
            <div className="absolute top-0 left-0 w-full flex flex-col items-center md:flex-row md:justify-between md:items-start p-1 bg-transparent-black">
                {/* Logo Section */}
                <div className="logo-section md:mb-0 md:ml-4 flex justify-center md:justify-start w-full md:w-auto">
                    <img src={logo} alt="Logo of JEC" className="h-[90px] w-[170px]" />
                </div>

                {/* List Section */}
                <div className="lists w-full md:w-auto flex justify-center md:justify-end md:mr-4">
                    <ul className="flex flex-wrap justify-center md:justify-end gap-5 p-2">
                        <li><a href="" className="text-xl text-black">Apply</a></li>
                        <li><a href="" className="text-xl text-black">About</a></li>
                        <li><a href="" className="text-xl text-black">News</a></li>
                        <li><a href="" className="text-xl text-black">Curriculum</a></li>
                        <li><a href="" className="text-xl text-black">Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Admission text and login button */}
            <div className="absolute bottom-0 left-0 md:top-0 md:left-auto md:right-4 md:bottom-auto md:w-1/3 p-4 text-center md:text-left">
                <div className="admission text-white p-4 rounded-md md:mt-20 md:static md:text-left text-center">
                    <h1 className="text-3xl font-bold text-center">ADMISSION OPEN</h1>
                    <p className="text-lg mb-3 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem odit temporibus illum non, placeat dicta rerum natus. Corrupti at dolorum consequatur suscipit qui officiis perferendis quasi dolorem, minus ipsa.
                    </p>
                    <div className="flex justify-center md:justify-center">
                        <a href="" className="px-3 py-2 bg-blue-600 hover:bg-blue-700 m-2 rounded-lg text-xl">LOGIN</a>
                    </div>
                </div>
            </div>
        </div>
        </header>
        </>
    )
}
export default Header