import { useState } from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {loginUser} from '../../services/userService.js'
const Login = (props) => {
    let history = useHistory();

    const [valueLogin,setValueLogin]= useState('');
    const [password,setPassword]=useState('');
    const defaultObjValidInput={
        isValidValueLogin:true,
        isValidPassword:true
    }
    const [objValidInput,setObjValidInput]=useState(defaultObjValidInput)
    const handleLogin =async ()=>{
        if(!valueLogin){
            toast.error("please enter your email address or phone number");
            setObjValidInput({...defaultObjValidInput,isValidValueLogin:false})
            return
        }
        if(!password){
            toast.error("please enter your password")
            setObjValidInput({...defaultObjValidInput,isValidPassword:false})
            return
        }
        let response = await loginUser(valueLogin,password);
        if(+response.data.EC ==0 && response.data && response){
            toast.success(response.data.EM);
            let data={
                isAuthenticated:true,
                token:'fake token'
            }

            history.push('/users');
            sessionStorage.setItem('account',JSON.stringify(data))
        }
        if(+response.data.EC !==0 && response.data && response){
            toast.error(response.data.EM)
        }
        
    }
    const handleCreateNewAccount = () => {
        history.push("/register");

    };

    return (
        <div className="login-container my-auto">
            <div className="container">
                <div className="row px-3 px-sm-0">

                    <div className="content-left col-12 d-none col-sm d-sm-block">
                        <div className="brand">Quy dep trai</div>
                        <div className="detail">learn everything</div>
                    </div>

                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 ">
                        <div className="brand d-sm-none">Quy dep trai</div>

                        <input
                            className="form-control"
                            type="text"
                            className={objValidInput.isValidValueLogin ? "form-control" :"is-invalid form-control"}
                            placeholder="email address or phone number"
                            value={valueLogin}
                            onChange={(event)=>setValueLogin(event.target.value)}
                        />

                        <input
                            className="form-control"
                            type="password"
                             className={objValidInput.isValidPassword ? "form-control" :"is-invalid form-control"}
                            placeholder="password"
                            value={password}
                            onChange={(event)=>setPassword(event.target.value)}
                        />

                        <button className="btn btn-primary" onClick={()=>{handleLogin()}}>
                            login
                        </button>

                        <div className="text-center forgot-password">
                           forgot your password
                        </div>

                        <hr />

                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={handleCreateNewAccount}
                            >
                                Create new account ?
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;