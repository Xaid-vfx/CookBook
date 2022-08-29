import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'




export default function Use() {

  return (
    <motion.div

    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className='container use' >
        <h2 style={{'textAlign':'left'}}>
            <strong>Search a Recipe</strong>
        </h2>
        <p>
        <i>  Type the keyword you want to search and press Search button to get accurate results</i>
        </p>
        <h2 style={{'textAlign':'left','margin-top':'5vh'}}>
        <strong>Add a Recipe</strong>

        </h2>
        <p>
           <i> 
            <p>
                Steps and Ingredients will be added one by one. Click Add after adding one step to add a new Step.
            </p>
            <p>Click submit after you have added all the steps and the respective image for the recipe</p>
            
           </i>
        </p>

        <p style={{'marginTop':'10vh'}}><i>Note: Any bugs encountered will be fixed soon</i></p>
        
    </div> 
      <Footer/>
    </motion.div>
  )
}
