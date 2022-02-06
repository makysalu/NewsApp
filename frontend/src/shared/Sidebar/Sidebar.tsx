import React from 'react';
import './Sidebar.css';
type AppProps = {
    active: string,
    setActive: (_type: string) => void
}

const Sidebar = ({active, setActive}:AppProps) => {
    return (
        <div className="bg-dark border-right" id="sidebar">
            <h3 className="text-light text-center p-3">News</h3>

            <hr className="text-light p-0"/>

            <div className="list-group list-reset">
                <ul className="row nav sticky-top">
                    <li className="col-12 nav-item text-light">
                        <span className={active !== "archive" ? "nav-link active" : "nav-link"}
                        onClick={() => setActive('news')}><strong>News</strong></span>
                    </li>
                    <li className="col-12 nav-item te text-light">
                        <span  className={active === "archive" ? "nav-link active" : "nav-link"}
                        onClick={() => setActive('archive')}><strong>Archived</strong></span>
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

export default Sidebar;