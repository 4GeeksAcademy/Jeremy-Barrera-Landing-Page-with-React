import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Navbar from "./components/Navbar.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <footer class="bg-dark text-white text-center py-4 mt-5">
      <p>&copy; 2025 My Company. All rights reserved.</p>
    </footer>
  </React.StrictMode>,
)
