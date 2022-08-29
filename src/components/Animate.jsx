import React, { useEffect } from 'react'
import {
    BrowserRouter as Router, Routes, Route, useLocation, Link, useNavigate
} from 'react-router-dom'
import Navbar from './Navbar'
import RecipeCard from './RecipeCard'
import Details from './Details'
import { AnimatePresence, motion } from "framer-motion"
import Add from './Add'
import clicked from './RecipeCard'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import Protected from './Protected'
import Logout from './Logout'
import Myrecipe from './Myrecipe'
import { useContext } from 'react'
import { Context } from '../Context'

import { query } from 'firebase/firestore'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react'
import Footer from './Footer'
import Use from './Use'




var test
export default function Animate(props) {

    const navigate = useNavigate()
    const effran = useRef(false)

    const [key, setkey] = useState()
    const [sname, setsname] = useState('')
  



    const user = useContext(Context)
    const [pname, setpname] = useState(localStorage.getItem('items'))
    function assign(nigga) {
        setpname(nigga);
        localStorage.setItem('items', JSON.stringify(nigga));
        // console.log(nigga);
    }



    //To save state
    useEffect(() => {
        const items = (localStorage.getItem('items'));
        //console.log(items);
        if (items) {
            setpname(items);
        }
    }, []);



    function search() {


        if (props.query !== undefined && effran.current == false) {
            props.query.map((object, i) => {


                function check() {

                    var ret
                    object.Ingredients.map((pee) => {
                        if (pee.includes(key)) {
                            console.log(pee + " " + key);
                            ret = true;
                        }
                    })
                    return ret
                }

                var c = check()

                if (object.Name == key || c == true) {
                    
                       // console.log("show only" + object.Name);
                        test=object.Name;
                        setsname(object.Name)
                        //console.log(test);
                    
                    
                }
                else {
                    setsname('')
                }
               // console.log(sname);
            })
            //   console.log(key);
        }

    }









    const location = useLocation()
    return (
        <motion.div className='all'
        >
            <AnimatePresence>

                <Routes location={location} key={location.pathname}>



                    <Route path='/' element={<Login />} />
                    <Route path='/Register' element={<Register />} />


                    <Route path='/Welcome' element={[<Protected><Navbar /></Protected>, <Protected><div className='child'><Form.Control value={key} onChange={(e) => { setkey(e.target.value) }}
                        type="search"
                        placeholder="Search a Recipe"
                        className="me-2"
                        aria-label="Search"
                    /><Button onClick={search} variant="outline-success">Search</Button></div></Protected>,
                    <div className='flexem'>
                        <div className='smbox'></div>
                        <h2 className='rectitle'>Recipes</h2>
                    </div>,
                    <div className='recipes'>
                        {props.query ? props.query.map((object, i) => {
                          //  console.log(test);
                            if (test == object.Name && test) {
                            //    console.log('in');
                             //   console.log(object.Name);
                                return (<Link className='lin' to='/Details'>
                                    <div onClick={() => assign(object.Name)}>
                                        <Protected><RecipeCard
                                            src={object.src}
                                            name={object.Name}
                                            ingredients={object.Ingredients}
                                            steps={object.Steps}
                                            key={i}
                                        /></Protected>
                                    </div></Link>)
                            }
                            else if (!key) {
                             //   console.log('nen');
                             //   console.log(object.Name);

                                return (<Link className='lin' to='/Details'>
                                    <div onClick={() => assign(object.Name)}>
                                        <Protected><RecipeCard
                                            src={object.src}
                                            name={object.Name}
                                            ingredients={object.Ingredients}
                                            steps={object.Steps}
                                            key={i}
                                        /></Protected>
                                    </div></Link>)
                            }else{

                            }


                        }) : "Loading"}
                        <Link className='lin' to='/Add'>
                            <div className='cardcont'>
                                <img src='https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png' alt="1" className='cardimg' />
                                <div className='cardbody'>
                                    <h3>Add</h3>
                                </div>
                            </div></Link>
                    </div>,<Footer/>
                    ]} />





                    <Route path='/MyRecipe' element={[<Protected><Navbar /></Protected>, <div className='flexem2'>
                        <div className='smbox'></div>
                        <h2 className='rectitle'> My Recipes</h2>
                    </div>,
                    <Protected>
                        <div className='recipes'>
                            {props.query2 ? props.query2.map((object, i) => {


                                if (user && user.email === object.email) {
                                    // console.log(user.email);

                                    return (<Link className='lin' to='/Details'>
                                        <div onClick={() => assign(object.Name)}>
                                            <Protected><RecipeCard
                                                src={object.src}
                                                name={object.Name}
                                                ingredients={object.Ingredients}
                                                steps={object.Steps}
                                                key={i}
                                            /></Protected>
                                        </div></Link>)
                                }




                            }


                            ) : "Loading"}
                            <Link className='lin' to='/Add'>
                                <div className='cardcont'>
                                    <img src='https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png' alt="1" className='cardimg' />
                                    <div className='cardbody'>
                                        <h3>Add</h3>
                                    </div>
                                </div></Link>
                        </div>
                    </Protected>,<Footer/>
                    ]} />


                    <Route path='/Details' element={
                        [<Navbar />, props.query ? props.query.map((object, m) => {
                            if (pname == object.Name) {

                                // console.log(object.Name);
                                return (<Details
                                    src={object.src}
                                    name={object.Name}
                                    Ingredients={object.Ingredients}
                                    Steps={object.Steps}
                                    key={m}
                                />)
                            }
                        }) : "Loading"]} />


                    <Route path='/Add' element={[<Navbar />, <Add />,<Footer/>]} />
                    <Route path='/Use' element={[<Navbar />, <Use />,<Footer/>]} />

                </Routes>
            </AnimatePresence>
        </motion.div>
    )
}
