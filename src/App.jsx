
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rating from './Components/Banner/Rating'
import Navbar from './Components/Navbar/Navbar'
import Tools from './Components/Tools/Tools'
import { Divide } from 'lucide-react'
import { ToastContainer } from 'react-toastify'
const fetchPromise = async() =>{
    const res = await fetch('/data.json');
    return res.json();
}
function App() {
const getPromise = fetchPromise()
const [count,setCount] =useState(0)
  return (
    <>
    
<Navbar count={count}></Navbar>
<Banner></Banner>
<Rating></Rating>
<Suspense fallback={<div className='text-center'>
  <span className="loading loading-dots loading-xl"></span>
</div>}>
<Tools setCount={setCount} getPromise={getPromise}></Tools>
</Suspense>
<ToastContainer
position='top-center'
autoClose={2000}></ToastContainer>
    </>
  )
}

export default App
