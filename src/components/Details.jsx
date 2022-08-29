import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'




export default function Details(props) {

  return (
    <motion.div

    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <h2><div className='flexem2'>
                        <div className='smbox'></div>
                        <h2 className='rectitle'>{props.name}</h2>
                    </div></h2>

       <div className='detcontainer'>
        <div className='imging'>
          <img src={props.src} alt="1" className='recimg' />
          <div className='container'>
            <h2>Ingredients</h2>
            {props.Ingredients.map(e=>
              <p>*{e}</p>
            )}
          </div>
        </div>
        <div className='container' id="steps">
          <h2>Steps</h2>
          
          {props.Steps.map(e=>
              <p>*{e}</p>
            )}
        </div>
        <p></p>
      </div> 
      <Footer/>
    </motion.div>
  )
}
