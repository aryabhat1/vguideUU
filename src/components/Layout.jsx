import { Outlet, Link } from "react-router-dom";
import incubationPage from "./IncubationPage";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/incubationPage">Incubation Center</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}
export default Layout;