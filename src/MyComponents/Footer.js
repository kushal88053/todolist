import React from 'react';

export const Footer = () => {
  return (
    <footer className='mt-5' style={{ position: "relative",bottom: 0, width: "100%", backgroundColor: "#343a40", color: "white", textAlign: "center", padding: "10px 0" }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>
          <a href="/privacy" style={{ color: "white", textDecoration: "none", marginRight: "15px" }}>Privacy Policy</a>
          |
          <a href="/terms" style={{ color: "white", textDecoration: "none", marginLeft: "15px" }}>Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};
