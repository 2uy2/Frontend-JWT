import "./Login.scss"

const Login=(props)=>{
    return (
        <div className="login-container mt-3">
            <div className="container">
                <div className="row">
                    <div className="content-left col-7">
                        <div className="brand">Quy</div>
                        <div className="detail">learn everything </div>
                    </div>
                    <div className="content-right col-5 d-flex flex-column gap-3 py-3">
                        <input className="form-control" type="text" placeholder="email address or phone number"/>
                        <input className="form-control" type="password" placeholder="password"/>
                        <butto className="btn btn-primary">login</butto>
                        <div className="text-center">forgot your password</div>
                        <hr/>
                        <div className="text-center">
                            <button className="btn btn-success">Create new account ?</button>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;