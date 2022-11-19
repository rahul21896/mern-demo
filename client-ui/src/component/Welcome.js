import logo from '../media/logo.png';
import {Link} from "react-router-dom";

function Welcome() {
    return(
        <div className={`flex-div`}>
            <div>
                <img src={logo} alt="Dev Rahul" className={`logo`}/>
                <div className={`menu_button`}>
                    <Link className={`button_link`} to={`/login`}>Login</Link>
                    <Link className={`button_link`} to={`/register`}>Register</Link>
                </div>
            </div>

        </div>
    )
}

export default Welcome;