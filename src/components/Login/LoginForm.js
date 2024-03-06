import {useState} from 'react';
import './LoginForm.css';

const LoginForm = () => {
    const [userName,setUsername]=useState("")
    const [password, setPassword] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault()
        setPassword("");
        setUsername("")

        alert("Log in successfully!");
      }

      const getIsFormValid = () => {
        return (userName!=='' &&  password!=='')
      };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required
          value={userName} onChange={e=>{setUsername(e.target.value)}}/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required
           value={password}
            onChange={e=>{  setPassword(e.target.value )  }}
             />
        </div>

        <button type="submit" className='loginButton' disabled={!getIsFormValid()}>Login</button>
        <p className="signup-link">Don't have an account? <a href="/Signup">Sign up</a></p>
      </form>
    </div>
  );
};

export default LoginForm;
