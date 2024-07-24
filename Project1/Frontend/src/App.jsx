import React, { useState } from "react";
import NewArticleForm from "./components/NewArticleForm.jsx";
import DeleteArticle from "./components/DeleteArticle.jsx";
import NewsList from "./components/NewsList.jsx";
import AboutPage from "./components/About.jsx";
import TeamPage from "./components/TeamPage.jsx";
import "./index.css";

function App() {
    const [isAuther, setAuther] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showTeam, setShowTeam] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [hideSearch, setHideSearch] = useState(false);

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchQuery(event.target.elements.search.value);
    };

    const handleButtonClick = (action) => {
        setHideSearch(true);
        if (action === 'about') {
            setShowAbout(true);
            setShowContact(false);
            setShowTeam(false);
        } 
         else if (action === 'team') {
            setShowAbout(false);
            setShowContact(false);
            setShowTeam(true);
        } else if (action === 'toggle') {
            setAuther(!isAuther);
        }
    };

    const handleClosePage = () => {
        setShowAbout(false);
        setShowTeam(false);
        setHideSearch(false);
    };

    return (
        <div>
            <div className="around">
                <h2 style={{color:'red',fontSize:"35px",textDecoration:"underline"}}>News App</h2>
                <br></br>
                <button className="button toggle-button" onClick={() => setAuther(!isAuther)}>
                    Switch to {isAuther ? "Viewer" : "Author"}
                </button><br/>
                
                <button className="button about-button" onClick={() => handleButtonClick('about')}>
                    About
                </button><br/>
                <button className="button team-button" onClick={() => handleButtonClick('team')}>
                    Team
                </button><br/>
            </div>
            {showAbout ? (
                <AboutPage onClose={handleClosePage} />
            ) : showTeam ? (
                <TeamPage onClose={handleClosePage} />
            ) : isAuther ? (
                <>
                    <NewArticleForm setAuther={setAuther} />
                    <DeleteArticle />
                </>
            ) : (
                <NewsList searchQuery={searchQuery} />
            )}
        </div>
    );
}
export default App;
