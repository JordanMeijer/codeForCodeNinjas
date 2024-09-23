import { useState } from 'react'

import './App.css'
import styles from './App.module.css'
import Contact from './pages/Contact'
import About from './pages/About'
import FAQ from './pages/FAQ'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [counter, setCounter] = useState(0)
  let display =<Contact/>

  function changePage(number){
    setCurrentPage(number)
  }


  if(currentPage === 1){
    display =  <Contact setCounter={setCounter} />
  }else if(currentPage === 2){
   display = <FAQ counter={counter}/>
  } else {
     display = <About />
  }

  return (
    <>
    <div className={styles.buttonContainer}>
      <button  className={styles.button} onClick={()=>{changePage(1)}}>Contact</button>
      <button onClick={()=>{changePage(2)}}>FAQ</button>
      <button onClick={()=>{changePage(3)}}>About</button>
    </div>
     
     
     {display}
    </>
  )
}

export default App

