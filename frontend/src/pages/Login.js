import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({formData, setFormData}) {
    const navigate = useNavigate();
    // const [formData, setFormData] = useState(
    //     {
    //         username: "",
    //         email: "",
    //         password: ""
    //     }
    //     );

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleLogin(e) {
        e.preventDefault()
        axios.post('http://localhost:4000/login', formData)
        .then(function (response) {
            console.log(response);
            navigate('/')
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    return (
        <div className="login-container">
            <div className="login-box">
                <form>
                    <label>Username</label>
                        <input type="text" value={formData.username} onChange={handleChange} name="username"/>
                    <label>Password</label>
                        <input type="password" value={formData.password} onChange={handleChange} name="password"/>
                    <button onClick={handleLogin}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;