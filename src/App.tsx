import { Routes, Route } from "react-router-dom"



import React, { Suspense } from "react"

// import pages lazily to reduce bundle size
const Home = React.lazy(() => import('./pages/Home/Home'))
const Error = React.lazy(() => import('./pages/Error/Error'))


function App() {




  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* MUST be last one */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  )
}

export default App
