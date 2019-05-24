import React from 'react'

function LoginForm({ username, password, handleChange, handleSubmit }) {
    return (
        <div>
            <h4>Login</h4>
            <form className="form-horizontal">
                <div className="form-group">
                    <div className="col-1 col-ml-auto">
                        <label className="form-label" htmlFor="username">Username</label>
                    </div>
                    <div className="col-3 col-mr-auto">
                        <input className="form-input"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-1 col-ml-auto">
                        <label className="form-label" htmlFor="password">Password: </label>
                    </div>
                    <div className="col-3 col-mr-auto">
                        <input className="form-input"
                            placeholder="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group ">
                    <div className="col-7"></div>
                    <button
                        className="btn btn-primary col-1 col-mr-auto"
                        onClick={handleSubmit}
                        type="submit">Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;