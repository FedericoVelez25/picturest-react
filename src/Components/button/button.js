import './button.css'
import {useHistory} from 'react-router-dom';

const Button = ({text, path}) => {
    const history = useHistory();
    console.log(history)
    return <button onClick={() => history.push(path)} className='button'>{text}</button>
}

export default Button;