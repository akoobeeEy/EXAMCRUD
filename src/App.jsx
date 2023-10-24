import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AdminLayout } from "./components/layout"
import {Home} from "./pages/home"
import {NewProduct} from "./pages/newProduct"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="newproduct" element={<NewProduct/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
