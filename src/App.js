import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import { useContext, useEffect, useState } from 'react';
import { auth, db, storage } from './firebase'
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import { async } from '@firebase/util';
import Details from './components/Details'

import Animate from './components/Animate';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Add from './components/Add';
import ContextProviderfunc from './Context';
import { Context } from './Context';







function App() {


  

  

  const [query, setquery] = useState()
  const [query2, setquery2] = useState()
  const [recipe, setrecipe] = useState()


  useEffect(() => {
    const getrecipe = async () => {
      const data = await getDocs(collection(db, 'recipe'))
      const data2 = await getDocs(collection(db, 'userrecipe'))

      console.log(data);
      setquery(data.docs.map((doc) => (
        {
          ...doc.data(), id: doc.id
        })
      ))
      setquery2(data2.docs.map((doc) => (
        {
          ...doc.data(), id: doc.id
        })
      ))
      console.log(query);
      console.log(query2);
    };

    getrecipe();
  }, []);


  useEffect(() => {
    // searchRecipes();
  }, [])

  return (
    <div>
      <ContextProviderfunc>
      <Router>
      
      
        <Animate  query={query} query2={query2}/>
      </Router>
      </ContextProviderfunc>

    </div>
  );
}

export default App;
