import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function SignUp() {
const navigate=useNavigate()
    const [credentials, setCredentials] = useState({ email: "", name: "", password: "", cpassword: "", showPassword: false, showConfirmPassword: false })
    const [errors, setErrors] = useState({});
    let history = useNavigate();

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    
    }

    const handleViewPassword =(e)=>{
        if(e.target.id === "password"){
            setCredentials({
                ...credentials,
                showPassword: !credentials.showPassword,
              });
        }else{
            setCredentials({
                ...credentials,
                showConfirmPassword: !credentials.showConfirmPassword,
              });
        }
       
    }

    const handleClick = async (e) => {
      const { email, name, password, cpassword } = credentials;

      console.log("enterred")

      if (name && email && password && cpassword) {
        if (email.endsWith("@gmail.com")) {
          if(password.length>=8)
          {

          
          if(password==cpassword)
          {

          
      
        
        
          axios
            .post("http://localhost:8000/signup", {
              name:name,
              email: email,
              password: password,
            })
            .then((res) => {
              alert(res.data.message);
              console.log("got it" + res);
              navigate("/login")
            })
            .catch((err) => {
              console.log("err" + err);
            });
          }
          else{
            alert("password not matched")
          }
        }
      
          else{
            alert("minimum length for password is 8")
          }
        }
        else {
          alert("invalid email")
        }
      }
      else {
        alert("invalid inpu nhiug ")
      }
    }

        // const response = await fetch(
        //   "http://localhost:8000/api/auth/createuser",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ email, name, password, cpassword }),
        //   }
        // );
        // const json = await response.json();
        // console.log(json);

        // if (json.success) {
        //     localStorage.setItem('token', json.authtoken);
        //     history("/");
        //     props.showAlert("Account created successfully", "success");
        // } else {
        //     if (json.validationErrors) {
        //         json.validationErrors.map((err) => {
        //             if (err.param === 'email') {
        //                 setErrors((prev) => ({ ...prev, email: err.msg }))
        //             } else if (err.param === 'name') {
        //                 setErrors((prev) => ({ ...prev, name: err.msg }))
        //             } else if (err.param === 'password') {
        //                 setErrors((prev) => ({ ...prev, password: err.msg }))
        //             } else {
        //                 setErrors((prev) => ({ ...prev, cpassword: err.msg }))
        //             }
        //         })
            
    //         if (json.error) {
    //             console.log("called")
    //             props.showAlert("Invalid Details! "+ json.error,"danger")
    //         }
    //     }
    // }


    return (
      <>
        <h1 className='grid '></h1>
        <div className="text-center mb-3">
          <h1>NoteVerse</h1>
          <p>
            <b>Your notes on cloud ☁️ </b>
          </p>
        </div>

        <div className="container form">
          <p className="text-center my-3">
            <i>New to NoteVerse? 👉🏻Create a new account here! </i>
          </p>
          <div className="mb-4 input-container">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              onChange={onchange}
              id="email"
              name="email"
              placeholder="name@example.com"
            />
            {errors.email && (
              <span className="error">
                <i className="fa fa-info-circle"></i> {errors.email}
              </span>
            )}
          </div>
          <div className="mb-4 input-container">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onchange}
              id="name"
              name="name"
            />
            {errors.name && (
              <span className="error">
                <i className="fa fa-info-circle"></i> {errors.name}
              </span>
            )}
          </div>
          <div className="mb-4 input-container">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type={credentials.showPassword ? "text" : "password"}
              className="form-control"
              onChange={onchange}
              id="password"
              name="password"
            />
            <i
              className={`fa fa-eye${
                credentials.showPassword ? "-slash" : ""
              } view-password`}
              id="password"
              onClick={handleViewPassword}
            ></i>
            {errors.password && (
              <span className="error">
                <i className="fa fa-info-circle"></i> {errors.password}
              </span>
            )}
          </div>
          <div className="mb-4 input-container">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <i
              className={`fa fa-eye${
                credentials.showConfirmPassword ? "-slash" : ""
              } view-password`}
              id="confirm-password"
              onClick={handleViewPassword}
            ></i>
            <input
              type={credentials.showConfirmPassword ? "text" : "password"}
              className="form-control"
              onChange={onchange}
              id="cpassword"
              name="cpassword"
            />
            {errors.cpassword && (
              <span className="error">
                <i className="fa fa-info-circle"></i> {errors.cpassword}
              </span>
            )}
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            SignUp
          </button>
        </div>
        <br />
        <p className="text-center last-para">
          Already have an account? <a href="/login">Login-&gt;</a>{" "}
        </p>
      </>
    );
}

export default SignUp