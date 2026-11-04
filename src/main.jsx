import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Component from './component.jsx'
// import Exercise from './exercise.jsx'
// import Exercise1 from './exercise1.jsx'
// import Props from './props.jsx'
// import Props1 from './props1.jsx'
// import Props2 from './props2.jsx'
// import Webpage from './webpage.jsx'
// import Webpage1 from './webpage1.jsx'
import Blog from './blog.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component /> */}
    {/* <App /> */}
  {/* <Exercise /> */}
  {/* <Exercise1 /> */}
  {/* <Props /> */}
  {/* <Props1 /> */}
   {/* <Props2 /> */}
   {/* <Webpage /> */}
    {/* <Webpage1 /> */}
    <Blog />
  </StrictMode>,
)
