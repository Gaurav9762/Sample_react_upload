import logo from './logo.svg';
import './App.css';
import TimeDate from './component/TimeDate';
import Factorial from './component/Factorial';
import FunFact from './component/FunFact';
import ArrayNames from './component/ArrayNames';
import EmpArr from './component/EmpArr';
import Welcome from './component/Welcome';
import ParaColor from './component/ParaColor';
import ImageComp from './component/ImageComp';
import { EmpInfo } from './component/EmpInfo';
import LoginComp from './component/Login';
import { RegForm } from './component/RegForm';
import { Link, Routes, Route } from 'react-router-dom';
import InvalidRoute from './component/InvalidRoute';
import DummyApi from './component/DummyApi';
import Restapi from './component/RestApi';
import Form from './practComp/form';
import Empinfo1 from './practComp/empinfo';


function App() {


  let n=5;

  let m = 4;

  const arr=["Pune","Nashik","Mumbai","PCMC"];

  const earr = [
                  {empid:"131010",
                    name:"garry",
                    sal:"5000"
                  },
                  {empid:"131011",
                    name:"Gauri",
                    sal:"15000"
                  },
                  {empid:"131010",
                    name:"Pratik",
                    sal:"7000"
                  },

                ]

  return (
    
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       {/* <TimeDate></TimeDate>
      <Factorial num={n}></Factorial>
      <FunFact num={m}></FunFact> 
      <ArrayNames a={arr}></ArrayNames>
      <EmpArr e={earr}></EmpArr>
      <Welcome></Welcome> */}
      {/* <ParaColor></ParaColor>
      <ImageComp></ImageComp> */}
      {/* <EmpInfo></EmpInfo> */}
      {/* <LoginComp></LoginComp> */}
      {/* <RegForm></RegForm> */}
      {/* <DummyApi></DummyApi> */}
      {/* <Restapi></Restapi>

      <nav>
        <div >
            <ul>
              <li>
                  <Link to="/simple">Simple component</Link>
              </li>
              <li>
                  <Link to="/props">Props component</Link>
              </li>
              <li>
                  <Link to="/styling">Styling component</Link>
              </li>
              <li>
                  <Link to="/todos">Dummy component</Link>
              </li>
              <li>
                  <Link to="/post">Postcomponent</Link>
              </li>
            </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome></Welcome>}/>
        <Route path="/simple" element={<ImageComp></ImageComp>}/>
        <Route path="/props" element={<ParaColor></ParaColor>}/>
        <Route path="/styling" element={<FunFact></FunFact>}/>
        <Route path="*" element={<InvalidRoute></InvalidRoute>}></Route>
        <Route path="/Fact" element={<Factorial></Factorial>}/>
      </Routes> */}
      <Form></Form>
      <Empinfo1></Empinfo1>

    </div>
  );
}

export default App;
