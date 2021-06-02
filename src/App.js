import BoardList from "./Components/boardList/boardList";
import Navbar from "./Components/navbar/navbar";
import PinList from './Components/pinList/pinList';
import UserCard from "./Components/userCard/userCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
const url = "http://localhost:5000/users/12" 

const [users, setUsers] = useState();

useEffect(() => {
  fetch(url)
  .then((response) => response.json())
    .then((json) => setUsers(json))
    .catch((err) => console.log(err))

}, []);

  return (
    <div className='appContainer'>
      <BrowserRouter>
        <Navbar user={users}/>
        <Switch>
          <Route path='/user'>
            <UserCard user={users}/>
          </Route>
          <Route path='/boards'>
            <BoardList />
          </Route>
          <Route path='/pins'>
            <PinList />
          </Route>
          <Route path='/'>
            //componente home
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
