import React from 'react'

export default function Footer() {
  
    let footerStyle = {
      position: "relative",
      top: "70vh",
      width : "100%",
      border : "2px solid grey"
    }
    return (
    <footer className="bg-dark text-light py-3"
    style=  {footerStyle}>
      <p className="text-center">Copyright &copy; Griffith | MyTodosList.com</p>
      
    </footer>
  )
}
