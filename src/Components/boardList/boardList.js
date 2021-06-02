import BoardCard from "../boardCard/boardCard";
import "./boardList.css";
import {useState, useEffect} from "react";

const BoardList = ({boards}) => {

    const url = 'http://localhost:5000/boards';
    const [boardList, setBoardList] = useState ('');

    useEffect (() => {
        fetch (url)
        .then((response) => response.json())
        .then ((json) => setBoardList(json))
        .catch ((err) => console.log(err))
    }, []);

    return (
        
        <div className="boardContainer">
            <div>
                <p className='boardsTitle'>Boards</p>
            </div>
            {boardList && boardList.map((board) => (
                <BoardCard board={board}/>
            ))}
        </div>
    )
}

export default BoardList;