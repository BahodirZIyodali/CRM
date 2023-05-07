import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Students from "./pages/Students"
import Groups from "./pages/Groups"
import GroupItem from "./pages/GroupItem"
import Payment from "./pages/Payment"
import Davomat from "./pages/Davomat"
import DavomatItem from "./pages/DavomatItem"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/students" element={<Students/>} />
      <Route path="/groups" element={<Groups/>} />
      <Route path="/groups/:group_id" element={<GroupItem/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/attendance" element={<Davomat/>} />
      <Route path="/attendance/:group_id" element={<DavomatItem/>} />
    </Routes>
  )
}

export default App
