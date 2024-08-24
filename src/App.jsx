import React from 'react'
import Hero from './component/Hero'
import './App.css';
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <div>
      <Analytics/>
      <Hero />
    </div>
  )
}

export default App