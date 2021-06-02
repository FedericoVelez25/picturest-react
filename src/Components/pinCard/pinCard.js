import './pinCard.css'

const PinCard = ({pin}) => {
    console.log(pin)
    return (
        <div className="pinCard">
            <img className='pinImage' src={pin.urlImg} />
            <p className="pinName">{pin.name}</p>
        </div>
    )
};

export default PinCard;