import logo from './logo_Picturest.png'
import "./logo.css";

const Logo = () => {
    return (
    <div className='logoContainer'>
        <img className='redLogo' src={logo}/>
        <p className='logoType'>Picturest</p>
    </div>
    )
}

export default Logo;