import React, { useState, useEffect } from 'react';
import  '../Css/Login.css'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function Login() {

    const [input, setInput] = useState({
        username: "",
        password: "",
      });
    
      const auth = useAuth();
      const handleSubmitEvent = (e) => {
        debugger
        e.preventDefault();
        if (input.username !== "" && input.password !== "") {
          auth.loginAction(input);
          return;
        }
        alert("pleae provide a valid input");
      };

      const handleInput = (e) => {
        const { name, value } = e.target; 
        setInput({
            ...input, 
            [name]: value, 
        });
    };

    return (
        <div className="wrapper fadeInDown d-flex align-items-center justify-content-center">
            <div id="formContent" className='login-form'>
                <div id="formFooter">
                    
                </div>
                 <form onSubmit={handleSubmitEvent} style={{ padding: '45px' }} className='login-form'>
                   
                    <input
                        type="text"
                        id="user-email"
                        name="username"
                        className="fadeIn second"
                        onChange={handleInput}
                        placeholder="User Name"
                        required
                    />
                    <input
                        type="text" // This should be type="password" instead of text for security
                        id="password"
                        name="password"
                        className="fadeIn third"
                        onChange={handleInput}
                        placeholder="Password"
                        required
                    />
                    <input
                        type="submit"
                        className="fadeIn fourth btn-dark"
                        value="Log In"
                    />
                </form>
                <div id="formFooter">
                    <a className="underlineHover" href="#">
                        Forgot Password?
                    </a>
                </div> 
                {/* <form onSubmit={handleSubmitEvent}>
                    <div className="form_control">
                        <label htmlFor="user-email">Email:</label>
                        <input
                            type="text"
                            id="user-email"
                            name="username"
                            placeholder="example@yahoo.com"
                            aria-describedby="user-email"
                            aria-invalid="false"
                            onChange={handleInput}
                        />
                        <div id="user-email" className="sr-only">
                            Please enter a valid username. It must contain at least 6 characters.
                        </div>
                    </div>
                    <div className="form_control">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            aria-describedby="user-password"
                            aria-invalid="false"
                            onChange={handleInput}
                        />
                        <div id="user-password" className="sr-only">
                            your password should be more than 6 character
                        </div>
                    </div>
                    <button className="btn-submit fadeIn fourth btn-dark">Log In</button>
                </form> */}
            </div>
        </div>
    );
}

export default Login;
