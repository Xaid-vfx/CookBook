import { addDoc, collection } from 'firebase/firestore';
import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { db } from '../firebase';
import { Context } from '../Context';







import {
   createUserWithEmailAndPassword
   , onAuthStateChanged,
   signOut,
   updateProfile
}
   from 'firebase/auth'
import { auth } from '../firebase';
import { doc, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util';
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage, upload } from '../firebase'
import { Link } from 'react-router-dom';



const stepsarray=[],ingarray=[];
export default function Add() {

  const [name,setname]=useState()
  const [steps,setsteps]=useState('')

  const[loading,setloading]=useState()

  const [ing,seting]=useState('')
  const [pic,setpic]=useState()
  const [count1,setcount1]=useState(1)
  const [count2,setcount2]=useState(1)
  const currentUser = useContext(Context)

  var url;



  function assignstep(e){
    e.preventDefault()
    stepsarray[count1-1]=steps;
    console.log(stepsarray);
    setcount2(count2+1)
    setsteps(e.target.value)
  }
  function assigning(e){
    e.preventDefault()
    ingarray[count2-1]=ing;
    console.log(ingarray);
    setcount1(count1+1)
    seting('')
    
  }

  const add = async(e) =>{
    e.preventDefault()

    async function upload() {
      if(pic!=null){
         const nname = new Date().getTime()+ '.jpg'
      const fileRef = ref(storage,nname)
      setloading(true)
      const snapshot = await uploadBytes(fileRef, pic);
  
      const som= await getDownloadURL(fileRef)
      url=som


      const doc= await addDoc(collection(db, "userrecipe"),{

        "email":currentUser.email,
        "Name":name,
        "Ingredients":ingarray,
        "Steps":stepsarray,
        "src":url
      })
      setloading(false)
      if(!!pic)
        alert('Uploaded!! Please Refresh');
      }
   }

   upload()
   
  
  
   
  }




  
  
  return (
    <div id='form'>


      <p> <i>*Please read <Link to='/Use'>How to use</Link> before adding a recipe to avoid any errors</i></p>
    <Form onSubmit={add} className='acform'>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Name</Form.Label>
          <Form.Control value={name}  onChange={(e)=>{
            setname(e.target.value)
          }}  type="text" placeholder="Enter Recipe Name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" >
        <Form.Label>Ingredients</Form.Label>
        <div style={{'display':'flex','align-items':"center",'gap':'2%'}}>
        <Form.Control value={ing} onChange={(e)=>{
          seting(e.target.value)
        }}    placeholder={"Enter Ingredient"+ " "+ count1+" and click Add"} id='box1'/>
        <Button onClick={assigning}  variant="primary" type="submit">
        Add
      </Button>
        </div>
      </Form.Group>
      

      <Form.Group className="mb-3">
        <Form.Label>Steps</Form.Label>
        <div style={{'display':'flex','align-items':"center",'gap':'2%'}} >
        <Form.Control value={steps}  onChange={(e)=>{
          setsteps(e.target.value)
        }}  placeholder={"Enter Step"+ " "+ count2+" and click Add"} id='box1' />
        <Button onClick={assignstep} variant="primary" type="submit">
        Add
      </Button>
        </div>
      </Form.Group>
      
      


      <Form.Group className="mb-3">
        <Form.Label>Select Recipe Image</Form.Label>
        
        <Form.Control onChange={(e)=>{
          if (e.target.files[0])
            setpic(e.target.files[0])
        }}   type="file" />
        
        </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>

    </div>
  )
}
