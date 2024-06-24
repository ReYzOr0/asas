import { useRef } from 'react'
import './App.css'

function App() {

 let num = 0
 let text1 = 'text'
 let text2 = 'text active'
 if(num == 1){
  text1 == text2
 }else{
  ''
 }

  return (
    <>
    <div className="container">
      <div className="block">
        <h1  className={text1}></h1>
      </div>
      
    </div>
      
    </>
  )
}

export default App
