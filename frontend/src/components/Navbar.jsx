import React , {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className=" border-hackerGreen p-4 bg-red">
      <div className="flex justify-between items-center">
        <h1 className="text-red-700 text-xl font-bold"> Shanko pentest report Generator</h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-hackerGreen focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-hackerRed">Home</Link>
          <Link to="/dashboard" className="hover:text-hackerRed">Dashboard</Link>
          <Link to="/report" className="hover:text-hackerRed">Report</Link>
          <Link to="/login" className="hover:text-hackerRed">Login</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-2 md:hidden">
          <Link to="/" className="hover:text-hackerRed" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/dashboard" className="hover:text-hackerRed" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/report" className="hover:text-hackerRed" onClick={() => setIsOpen(false)}>Report</Link>
          <Link to="./Pages/LoginPage" className="hover:text-hackerRed" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  )
}
