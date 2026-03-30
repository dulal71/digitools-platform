
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rating from './Components/Banner/Rating'
import Navbar from './Components/Navbar/Navbar'
import Tools from './Components/Tools/Tools'
import { Divide } from 'lucide-react'
const fetchPromise = async() =>{
    const res = await fetch('/data.json');
    return res.json();
}
function App() {
const getPromise = fetchPromise()

  return (
    <>
    
<Navbar></Navbar>
<Banner></Banner>
<Rating></Rating>
<Suspense fallback={<div className='text-center'>
  <span className="loading loading-dots loading-xl"></span>
</div>}>
<Tools getPromise={getPromise}></Tools>
</Suspense>

    </>
  )
}

export default App
