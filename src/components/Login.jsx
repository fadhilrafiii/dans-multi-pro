import React, {useState} from 'react';
import '../styles/Login.scss'
import { useHistory } from 'react-router-dom'


function Login() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const history = useHistory();

    const routeChange = () =>{ 
        if (data.username && data.password) {
            let path = `jobs`; 
            history.push(path);
        } else {
            setError("Please fill the form!")
        }
    }

    const [error, setError] = useState("")

    const handleChange = (e) => {
        const {name, value} = e.target
        
        setData(prev => {
            return (
                {
                    ...prev,
                    [name]: value
                }
            )
        })
    }

    return (
    <div className="login-page">
        <div className="login-container columns">
            <div className="piclog-container column">
                <img src="images/6671.jpg" alt="Login Landing Page"/>
            </div>
            <div className="login-input-container column">
            
                <div className="field">
                    <label className="label">Username: </label>
                    <div className="control has-icons-left has-icons-right" >
                        <input onChange={handleChange} className="input" type="text" placeholder="Username" value={data.username} name="username" />
                        <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                        </span>
                    </div>
                    {data.username? <p className="help is-success">This username is available</p> : <p className="help is-danger">This username is unavailable</p>}
                </div>

                <div className="field">
                    <label className="label">Password: </label>
                    <div className="control has-icons-left has-icons-right" >
                        <input onChange={handleChange} className="input" type="text" placeholder="Password" value={data.password} name="password" />
                        <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                        </span>
                    </div>
                    {data.password? null : <p className="help is-danger">Please insert your password</p>}
                </div>

                <div className="field">
                    <div className="control">
                        <button className="button btn-submit is-white" onClick={() => routeChange()}>Submit</button>
                    </div>
                </div>
                <div>
                    <p style={{color: "red"}}>{error}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;