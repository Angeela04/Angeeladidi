import {Outlet,Link} from "react-router-dom";
const sidebar =() => {
    return(
    <div>
        <section>
        <nav>
            <ul>
            <li>
                <Link to="/Contact">Contact</Link> 
                </li>
            <li>
               <Link to="/UserManagement">User Management</Link> </li>
            <li>
                <Link to="/FAQ">FAQ</Link></li>
            </ul>
        </nav>
        
        <article>
           <Outlet/>
        </article>
        </section>
        </div>) ;
}
export default sidebar; 