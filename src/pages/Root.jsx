import { Link, Outlet } from "react-router-dom"
export default function Root(){
    return(
        <>
            <nav>
                <ul>
                    <Link to = "/"><li>Home</li> </Link>
                    <Link to = "/about"><li>About</li> </Link>
                </ul>
            </nav>
            <Outlet />
            <h1> Footer </h1>
        </>
    )
}