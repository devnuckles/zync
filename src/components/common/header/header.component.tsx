import Logo from "../logo.component";
import NavBar from "./navbar.component";

const Header = () => {
    return (
        <div className="sticky bg-white shadow-sm py-2">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <Logo />
                    <NavBar />
                </div>
            </div>
        </div>
    );
};

export default Header;
