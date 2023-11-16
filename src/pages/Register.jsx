import React from 'react'
import { Link } from 'react-router-dom'

const Register = () =>{
    return(
        <div className='auth'>
          <h1>Register</h1>  
          <form>
            <input requied type='text' placeholder='username' />
            <input requied type='email' placeholder='email' />
            <input requied type='password' placeholder='password'/>
            <button>Register</button>
            <p>This is an Error!</p>
            <span> Do you have an account?<Link to='/login'>Login</Link>

            </span>
          </form>

        </div>
    )
}
export default Register;