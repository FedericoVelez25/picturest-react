import "./boardCard.css"

const BoardCard = ({board}) => {
console.log(board)
    return (
    <div className="boardCard">
        <p className="boardName">{board.title}</p>
    </div>
    )
};

export default BoardCard;
