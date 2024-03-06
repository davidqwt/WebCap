import { useState } from "react";
import { validateEmail} from "./Validate"
import './Signup.css'

const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  };

export default  function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
      value: "",
      isTouched: false,
    });

    const getIsFormValid = () => {

      return (firstName!=='' && email!==''&& validateEmail(email) && password.value.length>= 8)

    };

    const clearForm = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword({
        value: "",
        isTouched: false,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      alert("Account created!");
      clearForm();
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset className="signupFieldset">
            <h2>Sign Up</h2>

            <div className="form-group">
              <label>
                First name <sup>*</sup>
              </label>
              <input placeholder="First name" value={firstName} onChange={e=>{setFirstName(e.target.value)}}/>
            </div>


            <div className="form-group">
              <label>Last name</label>
              <input placeholder="Last name" value={lastName} onChange={e=>{setLastName(e.target.value)}}/>
            </div>


            <div className="form-group">
              <label>
                Email address <sup>*</sup>
              </label>
              <input placeholder="Email address" value={email} onChange={e=>{setEmail(e.target.value)}} />
            </div>


            <div className="form-group">
              <label>
                Password <sup>*</sup>
              </label>
              <input placeholder="Password" value={password.value} type="password"
              onChange={e=>{  setPassword(  {...password,value:e.target.value}  )  }}
              onBlur={() => {
                  setPassword({ ...password, isTouched: true });
                }}
           />

          {password.value.length <8 && password.isTouched ? (<PasswordErrorMessage/>) : null}
            </div>

            <button type="submit" className='loginButton' disabled={!getIsFormValid()}>
              Create account
            </button>
          </fieldset>
        </form>
 
      </div>
    );
            }