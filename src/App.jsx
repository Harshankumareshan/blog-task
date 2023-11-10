import React from 'react'
import NavBar from './Components/NavBar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateBlog from './Components/Createblog'
import ManageBlogs from './Components/ManageBlogs'
import Home from './Components/Home'
import EditBlog from './Components/EditBlog'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <div> 
      <NavBar/>
     </div>
     <div className="container-fluid">
<Routes>
<Route path="/create" element={<CreateBlog/>}/>
<Route path="/manage" element={<ManageBlogs/>}/>
<Route path="/edit/:id" element={<EditBlog/>}/>
<Route path="/*" element={<Home/>}/>
</Routes>
     </div>

     </BrowserRouter>
    </>
  )
}

export default App
