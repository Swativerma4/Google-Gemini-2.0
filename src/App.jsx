import React from 'react'
import Sidebar from './component/Sidebar/Sidebar'
import Main from './component/Main/Main'
import "./App.css"
export default function App() {
  return (
    <div className='container'>
     
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  )
}
