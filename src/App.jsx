import './App.css';
import { useContext, useEffect } from 'react';
import Routing from './Router.jsx';
import { DataContext } from './Components/DataProvider/DataProvider';
import { Type } from './utility/actionType.js';// ✅ matches actual file
import { auth } from './utility/firebase.js';   // ✅ matches actual file

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return <Routing />;
}

export default App;
