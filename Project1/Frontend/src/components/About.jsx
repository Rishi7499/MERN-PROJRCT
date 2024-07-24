import React from "react";
import './About.css'
import MyComponent from './img1';
import MyComponent1 from "./img2";

function AboutPage({ onClose }) {
    return (
        <div>
            <h1 style={{color:'black',fontSize:'50px',textDecoration:'underline',fontStyle:"italic"}}>About Page</h1><br></br>
            <div className="Summary">
            <h2 id="black">1-Project Overview:</h2><br></br>
            <h3 id="info">The News Media Platform is a comprehensive web application designed to deliver the latest news articles and updates across various categories such as politics, technology, sports, entertainment, and more. The platform allows users to read, comment, and share news articles, providing an interactive and engaging experience.</h3>
            <h2 id="black">2-Technology Stack:</h2><br></br>
             <h3 id="mern"> i-MongoDB: Utilized for the database to store news articles, user profiles, comments, and other relevant data.</h3>
             <h3 id="mern">ii-Express.js: Serves as the backend framework to handle API requests, user authentication, and server-side logic.</h3>
             <h3 id="mern">iii-React.js: Powers the frontend, offering a dynamic and responsive user interface for seamless interaction.</h3>
             <h3 id="mern">iv-Node.js: Facilitates the server environment, enabling efficient and scalable backend operations.</h3>
             <h2 id="structure">3-Project Structure:</h2><br></br>
             <h3 id="mern">Backend: Organized into models, routes, controllers, and middleware to maintain a clean and modular codebase.</h3><br></br>
              <MyComponent/><br></br>
             <h3 id="mern">Frontend: Structured into components, hooks, and state management to create a seamless user experience.</h3><br></br>
                <MyComponent1/> <br></br>    
                <h2 id="process"> 4-Development Process: </h2><br></br>
                <h3 id="mern">i-Planning and Design.<br/>ii-Setup Environment.<br/>iii-Backend Development.<br/>iv-Frontend Development.<br/>v-Testing and Deployment </h3><br/>
                <h2 id="mern">The News Media Platform aims to provide an immersive and interactive news reading experience, leveraging the MERN stack's full potential to deliver a high-performance, user-friendly application.</h2>
                
            </div>
            <button id="close" onClick={onClose}>Close</button><br></br>
        
        </div>
    );
}

export default AboutPage;
