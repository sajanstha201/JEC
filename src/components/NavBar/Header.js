import { Link } from 'react-router-dom'
import logo from '../../media/images/jec-logo.png'
import vid from '../../media/images/jec.mp4'
function Header(){
    return(
        <>
            <div className="fixed z-10 top-0 left-0 w-full backdrop-blur-sm flex flex-col items-center md:flex-row md:justify-between md:items-start p-1 " style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                {/* Logo Section */}
                <div className="logo-section md:mb-0 md:ml-4 flex justify-center md:justify-start w-full md:w-auto">
                    <img src={logo} alt="Logo of JEC" className="h-[90px] w-[170px]" />
                </div>

                {/* List Section */}
                <div className="lists w-full md:w-auto flex justify-center md:justify-end md:mr-4">
                    <ul className="flex flex-wrap justify-center md:justify-end gap-5 p-2">
                        <li><Link  className="text-xl text-white">Apply</Link></li>
                        <li><Link className="text-xl text-white">About</Link></li>
                        <li><a href="" className="text-xl text-white">News</a></li>
                        <li><a href="" className="text-xl text-white">Curriculum</a></li>
                        <li><Link to='/contact-us' className="text-xl text-white">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header