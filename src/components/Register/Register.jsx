import "./Register.scss";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { registerNewUser } from "../../services/userService";

const Register = (props) => {
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const defaultValidInput = {
        isValidEmail:true,
        isValidPhone:true,
        isValidUserName:true,
        isValidPassword:true,
        isValidConfirmPassword:true
    }
    const [objCheckValid,setObjCheckInput] = useState(defaultValidInput)
    const isValidInputs = ()=>{
        setObjCheckInput(defaultValidInput)
         let regx = /\S+@\S+\.\S+/;
          
        if(!regx.test(email)){
            toast.error("please enter a valid email");
            setObjCheckInput({...defaultValidInput,isValidEmail:false})
            return false;
        }
        if(!email){
            setObjCheckInput.isValidEmail(false)
            toast.error("Email is required ");
             setObjCheckInput({...defaultValidInput,isValidEmail:false})
            return false
        }
        if(!phone){
            toast.error("phone is required ");
             setObjCheckInput({...defaultValidInput,isValidPhone:false})
            return false
        }
        if(!userName){
            toast.error("userName is required ");
             setObjCheckInput({...defaultValidInput,isValidUserName:false})
            return false
        }
        if(!password){
            toast.error("password is required ");
             setObjCheckInput({...defaultValidInput,isValidPassword:false})
            return false
        }
        if(!confirmPassword){
            toast.error("confirmPassword is required ");
             setObjCheckInput({...defaultValidInput,isValidPassword:false})
            return false
        }
        if(password != confirmPassword){
            toast.error("wrong confirm password ");
             setObjCheckInput({...defaultValidInput,isValidConfirmPassword:false})
            return false
        }
       
            
        return true
    }

    const handleRegister =async()=>{
        let check = isValidInputs();
        
        if(check===true){
           let response = await registerNewUser(email,phone,userName,password);
           let serverData = response.data;
           if(+serverData.EC===0){
            toast.success(serverData.EM)
           }
           else {
            toast.error(serverData.EM);
           }
         
        }
        
    }

    let history = useHistory();

    const handleLogin = () => {
        history.push("/login");
    };
    useEffect(()=>{
        registerNewUser()
       
       
    },[])
    return (
        <div className="register-container my-auto">
            <div className="container">
                <div className="row px-3 px-sm-0">

                    <div className="content-left col-12 d-none col-sm d-sm-block">
                        <div className="brand">Quy dep trai</div>
                        <div className="detail">learn everything</div>
                    </div>

                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 ">
                        <div className="brand d-sm-none">Quy dep trai</div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                            className={objCheckValid.isValidEmail ? `form-control`: `form-control is-invalid`}
                            type="text"
                            placeholder="email address "
                            value={email}
                            
                            onChange={(event)=>setEmail(event.target.value)}
                        />
                        </div>
                        <div className="form-group">
                            <label>phone number:</label>
                            <input
                             className={objCheckValid.isValidPhone ? `form-control`: `form-control is-invalid`}
                            type="text"
                            placeholder="phone number"
                            value={phone}
                            onChange={(event)=>setPhone(event.target.value)}
                        />
                        </div>
                        <div className="form-group">
                            <label>user name:</label>
                            <input
                             className={objCheckValid.isValidUserName ? `form-control`: `form-control is-invalid`}
                            type="text"
                            placeholder="user name"
                            value={userName}
                            onChange={(event)=>setUserName(event.target.value)}
                        />
                        </div>
                        <div className="form-group">
                            <label>password:</label>
                             <input
                             className={objCheckValid.isValidPassword ? `form-control`: `form-control is-invalid`}
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(event)=>setPassword(event.target.value)}
                            />
                        
                        </div>
                        <div className="form-group">
                            <label>re-enter password:</label>
                             <input
                             className={objCheckValid.isValidConfirmPassword ? `form-control`: `form-control is-invalid`}
                            type="password"
                            placeholder="re-enter password"
                            value={confirmPassword}
                            onChange={(event)=>setConfirmPassword(event.target.value)}
                            />
                        
                        </div>


                        <button className="btn btn-primary" onClick={()=>handleRegister()}>
                            register
                        </button>

                        <hr />

                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={()=>{handleLogin()}}
                            >
                                already've an account .login ?
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;