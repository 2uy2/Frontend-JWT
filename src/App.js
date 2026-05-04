
import './App.scss';
import Login from './components/Login/Login';
import Nav from './components/Navigation/Nav';
import Register from './components/Register/Register';
import Users from './components/ManageUsers/Users';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react';

import AppRoutes from './routes/AppRoutes.js';
function App() {
  const [account,setAccount]=useState({});
  useEffect(()=>{
    let session =sessionStorage.getItem('account');
    if(session){
        setAccount(JSON.parse(session));

    }
  },[])
  return (
    <>
      <Router>
      <div className='app-header'>
        <Nav/>
      </div>
      <div className='app-container'>
        <AppRoutes/>  
        
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
      />
    </Router>
    </>
    
    
  );
}

export default App;
