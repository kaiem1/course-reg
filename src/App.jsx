
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import SelectCard from './components/Select-card/SelectCard'

function App() {


  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <SelectCard></SelectCard>
        </div>      
      
    </>
  )
}

export default App
