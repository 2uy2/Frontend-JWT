import "./Login.scss";
import { useHistory } from "react-router-dom";

const Login = (props) => {
    let history = useHistory();


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
                            placeholder="email address or phone number"
                        />

                        <input
                            className="form-control"
                            type="password"
                            placeholder="password"
                        />

                        <button className="btn btn-primary">
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