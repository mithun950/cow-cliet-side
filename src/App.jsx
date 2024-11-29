
import './App.css'
import { Link, useLoaderData } from 'react-router-dom'
import Card from './Card';
import { useState } from 'react';

function App() {


  const loadedCows = useLoaderData()
  const [cows,setCows] = useState(loadedCows)
 

const {name,quantity,supplier,taste,category,detail,photo} = loadedCows;




  return (
    <>
     <h2>Cow : {cows.length}</h2>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-6'>
      {
        loadedCows.map(cow => <Card key={cow._id} cow={cow} cows={cows} setCows={setCows}></Card>)
      }
     </div>


<Link to='/addCow' className='btn btn-secondary mt-10'>ADD COW</Link>

    </>
  )
}

export default App
