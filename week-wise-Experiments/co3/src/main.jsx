import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//import Counter from './components/Counter.jsx'
//import App from './components/App.jsx'
//import Childrenprops from './components/childrenprops.jsx'
//import StudentList from './components/StudentList.jsx'
//import ResponsiveLayout from './components/ResponsiveLayout.jsx'
import ControlledForm from './components/CountrolledForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/*<App />*/}
    {/*<Counter />*/}
    {/* <StudentList/>*/}
    {/*<ResponsiveLayout />*/}
    {/*<ControlledForm/> */}
    {/*<UnControlledForm/>*/}
   {/* <Childrenprops/>*/}
   {/*<Counter/>*/}
   {/*<StudentList/>*/}
   {/*<ResponsiveLayout/>*/}
   <ControlledForm/>

  </StrictMode>,)
