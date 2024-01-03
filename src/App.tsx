import { Routes, Route } from "react-router-dom"



import React from "react"

// import pages lazily to reduce bundle size
const Home = React.lazy(() => import('./pages/Home/Home'))
const Error = React.lazy(() => import('./pages/Error/Error'))


function App() {




  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* MUST be last one */}
      <Route path="*" element={<Error/>} />
    </Routes>
  )
}

export default App
