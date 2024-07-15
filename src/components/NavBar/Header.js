import logo from '../../media/images/jec-logo.png'
import vid from '../../media/images/jec.mp4'
function Header(){
    return(
        <>
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
        </>
    )
}
export default Header