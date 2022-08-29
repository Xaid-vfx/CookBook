import React from 'react'
import { motion } from "framer-motion"
import { Link, Route, Router ,Routes, useNavigate} from 'react-router-dom'
import Details from './Details'

export default function RecipeCard(props) {
  const navigate= useNavigate()

  
  
  function clicked(){
    console.log('clicked'+props.name);
    // navigate('/Details')
    // return props.name;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

    >
       
        <div onClick={clicked} className='cardcont' >

          <img src={props.src} alt="1" className='cardimg' />
          <div className='cardbody'>
            <h3>{props.name}</h3>
          </div>
        </div>
      
    </motion.div>
  )
  
}

RecipeCard.defaultProps = {
  src:'',
  name:'',
  ingredients:'',
  steps:'',
  key:''
}



