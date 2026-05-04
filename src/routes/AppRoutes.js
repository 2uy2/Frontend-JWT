import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from '../components/Login/Login';

import Register from '../components/Register/Register';
import Users from '../components/ManageUsers/Users';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = (props)=>{
    /*
    [users/show, users/update]
     */
    const Project = ()=>{
        return (
            <>projects</>
        )
    }
    return (
        <>
            <Switch>
                
                
                <PrivateRoutes path="/users" component={Users}/>
                <PrivateRoutes path="/projects" component={Project}/>

                <Route path="/" exact>
                    home
                </Route>
                <Route path="/login" >
                    <Login/>
                </Route>
                <Route path="/register" >
                    <Register/>
                </Route>
                
                <Route path="*" >
                    404 not found
                </Route>
            </Switch>
        </>
    )
}
export default AppRoutes