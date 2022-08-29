import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useContext } from 'react'
export default function Login() {

    const [email, setemail] = useState()
    const [pass, setpass] = useState()
    const [conpass, setconpass] = useState()
    const [error, seterror] = useState()
    const navigate = useNavigate()


    const login = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, email, pass);
            console.log(user);
            if (!!user) {
                console.log('Logged In');
                seterror('')
                navigate('/Welcome')
            }
        }
        catch (error) {
            seterror("Invalid Username or Password")
        }
    }







    return (

        <div className='bgimg'>

            <h1 className='tilte'>
                <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-egg-fried" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                </svg> CookBook</h1>
                <p className='tilte'>
                    Find your ideal Recipe
                </p>
            <div className='loginbox'>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => {
                            setemail(e.target.value)
                        }} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                            onChange={(e) => {
                                setpass(e.target.value)
                            }} />
                    </div>
                    {error && <div className="alert alert-danger" role="alert">
                        {error}
                    </div>}
                    <button onClick={login} style={{ 'margin-top': '10px', 'margin-bottom': '10px' }} type="submit" class="btn btn-primary">Submit</button>
                    <p style={{ 'margin-top': '10px', 'margin-left': '10px' }}><small><i>Dont have an account?   </i></small><Link to='/Register'>  <i>Register</i></Link></p>

                </form>
            </div>
        </div>

    )
}
