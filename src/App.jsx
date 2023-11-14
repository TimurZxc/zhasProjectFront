import Register from './components/Register';
import Login from './components/Login';
import Layout from './components/Layout';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Main from './components/Main';
// import Form from './components/Form';
// import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Mentors from './components/Mentors';
import Info from './components/Info';
import QandA from './components/QandA';
import Participants from './components/Participants';
import Profile from './components/Profile';
// import RequireAdmin from './components/RequireAdmin';
import Expired from './components/Expired';
import Deadline from './components/Deadline';
import Results from './components/Results';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path='mentors' element={<Mentors/>} />
        <Route path='qa' element={<QandA/>} />
        <Route path='info' element={<Info/>} />
        <Route path='profile' element={<Profile/>}/>
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path='results' element={<Results />} />

        {/* we want to protect these routes */}
        {/* <Route element={<RequireAuth />}> */}
          {/* <Route path='form' element={<Form/>} /> */}
          <Route path='form' element={<Deadline/>} />
        {/* </Route> */}

        <Route path='/expired' element={<Expired/>}/>
        {/* <Route element={<RequireAdmin />}> */}
          <Route path='particip' element={<Participants/>} />
        {/* </Route> */}

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;