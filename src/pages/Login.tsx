const Login = (): JSX.Element => {
    return (
        <div className="container d-flex height-100">
            <form className="form m-auto">
                <h1 className="title form_title">Login</h1>
                <div className="form_container error">
                    <input className="form_input input-field" type="text" id="login" placeholder=" " />
                    <label className="form_label" htmlFor="login">Login incorrect</label>
                </div>
                <div className="form_container">
                    <input className="form_input input-field" type="text" placeholder=" " />
                    <label className="form_label" htmlFor="login">Password</label>
                </div>
                <button className="button form_button" type="button">Войти</button>
            </form>
        </div>
    );
};

export { Login };
