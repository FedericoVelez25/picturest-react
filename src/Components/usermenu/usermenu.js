import "./username.css";
import {DropdownButton} from "@popperjs/core";

const Usermenu = ({user}) => {
    return (
        <div className='user'>
            <img className="avatarNavbar" src={user?.avatar}/>
            <p className='arrow'></p>
          
        </div>
    )
};

export default Usermenu