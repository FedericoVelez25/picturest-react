import "./userCard.css"

const UserCard = ({user}) => {
    return (
        <div>
            {user &&
            <div className= "userCard">
            <img className="avatarImgCard" src={user.avatar}/>
            <p className="userNameCard">{user.firstName + " " + user.lastName}</p>
            <p className="userHandle">{user.username}</p>
            <p className="following">{user.following}</p>
            </div>
            }

        </div>
        
    )
}

export default UserCard