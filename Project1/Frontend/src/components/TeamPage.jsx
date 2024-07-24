import React from "react";
import './team.css'

function TeamPage({ onClose }) {
    return (
        <body style={{backgroundColor:"white"}}>
        <div className="team">
            <h2 id="h">Our Team</h2>
            <p id="t">Meet the amazing team behind our project:</p><br/>
            <ul id="l">
                <li>Rushikesh Chougule - +91 7499727617</li>
                <li>Suyash Bhosale     - +91 8425946497</li>
                <li>Arnav Warkar       - +91 8767860100 </li>
                <li>Sarthak Gawhane    - +91 8591266928 </li>
            </ul>
            <p id="e">Email id:</p><br/>
            <ul id="id">
                <li>rushikeshchougule789@gmail.com</li>
                <li>suyashbhosale45@gmail.com</li>
                <li>arnavwarkar34@gmail.com</li>
                <li>sarthakgawhane67@gmail.com</li>
            </ul><br/>
            
            <button id="back" onClick={onClose} style={{ marginTop: "30px", fontSize: "20px",color:"black",fontWeight:"bold" }}>Close</button>
        </div>
        </body>
    );
}

export default TeamPage;
