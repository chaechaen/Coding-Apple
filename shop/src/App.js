import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js';
import {Router, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {
  
  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Shoeshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
          <div className="container">
            <div className="row">
                {shoes.map(function(a, i){
                  return <Card shoes={shoes[i]} i={i}></Card>
                })}
            </div>
          </div>
          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
                
        <Route path="*" element={<div>없는 페이지임</div>} />

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>

      </Routes>
    </div>
  );
}

function About(){
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
