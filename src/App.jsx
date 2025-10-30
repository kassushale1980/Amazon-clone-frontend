import './App.css';
import { useContext, useEffect } from 'react';
import Routing from './Router.jsx';
import { DataContext } from './Components/DataProvider/DataProvider';

// Match exact filename and folder case
import { Type } from './utility/actionType.js';
import { auth } from './utility/firebase.js';




function App() {
const [{user},dispatch] = useContext(DataContext)

useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      // console.log(authUser)
      dispatch({
        type: Type.SET_USER,
        user: authUser
      })
    }else{
      dispatch({
        type: Type.SET_USER,
        user: null
      })
    }
     }) 



},[])

 return (
   <Routing/>
    );
}

export default App;




