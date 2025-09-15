import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                 <p
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
          bg-[length:200%_200%] text-transparent bg-clip-text animate-gradient"
        >RESUNOVA</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar