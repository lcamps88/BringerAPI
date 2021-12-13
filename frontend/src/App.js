import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Token from './components/Token/Token'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

const App=() =>{
  return (
    <div>
    <Header/>
    <main className="py-3">
      <Container>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/:token" element={<Token/>}></Route>
        </Routes>
      </Container>
    </main>
    <Footer/>
  </div>
  );
}

export default App;
