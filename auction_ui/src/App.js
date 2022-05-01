import Layout from "./Components/Layout/Layout";
import {Routes,Route} from 'react-router-dom'
import Login from "./Components/Login/Login";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Layout iscreated={false} isLoggin={true}/>}/>
        <Route path="/register" element={<Layout iscreated={false} isLoggin={false}/>}/>
        <Route path="/login1" element={<Layout iscreated={true} isLoggin={true}/>}/>
      </Routes>
    </div>
  );
}

export default App;
