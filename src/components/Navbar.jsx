import React from 'react'
import '../components/navbar.css'
import Dashboard from './Dashboard.jsx'
function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
          <h1>🎓Dreams<span>
            Guider</span></h1>
        </div>
        <div className="dashboard"><h2>🎓Student dashboard</h2></div>
        <div className="info">
          <h1>📅Date:4 Aug 2026</h1>
           <h1>👥TotalStudent:16</h1>
        </div>
        
    </div>
    
  )
}

export default Navbar