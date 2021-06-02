import Logo from "../logo/logo";
import Button from "../button/button"
import Usermenu from "../usermenu/usermenu"
import './navbar.css'

function Navbar({user}) {
    return (
        <div className='navBarContainer'>
            <Logo className='navBarLogo'/>
            <div className='navBarButtons'>
                <Button className='navBarButton' text="Home" path='/'/>
                <Button className='navBarButton' text="Board" path='/boards'/>
                <Button className='navBarButton' text="Pins" path='/pins'/>
            </div>
            <Usermenu user={user} className='navBarUser'/>
          
        </div>
        
    )
}

export default Navbar;


// <div className='navBarLogoUser'> 