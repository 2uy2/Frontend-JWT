import "./Register.scss";
import { useHistory } from "react-router-dom";

const Register = (props) => {
    let history = useHistory();

    const handleLogin = () => {
        history.push("/login");
    };

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
                            className="form-control"
                            type="text"
                            placeholder="email address "
                        />
                        </div>
                        <div className="form-group">
                            <label>phone number:</label>
                            <input
                            className="form-control"
                            type="text"
                            placeholder="phone number"
                        />
                        </div>
                        <div className="form-group">
                            <label>user name:</label>
                            <input
                            className="form-control"
                            type="text"
                            placeholder="user name"
                        />
                        </div>
                        <div className="form-group">
                            <label>password:</label>
                             <input
                            className="form-control"
                            type="password"
                            placeholder="password"
                            />
                        
                        </div>
                        <div className="form-group">
                            <label>re-enter password:</label>
                             <input
                            className="form-control"
                            type="password"
                            placeholder="re-enter password"
                            />
                        
                        </div>


                        <button className="btn btn-primary">
                            register
                        </button>

                        <hr />

                        <div className="text-center">
                            <button
                                className="btn btn-success"
                                onClick={handleLogin}
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