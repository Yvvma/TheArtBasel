import * as React from "react";

type HeaderProps = {
    title: string
}


const Header: React.FC<HeaderProps> = ({title}) =>{
    return (
        <header>
            <div className="header-container">
                <h1 className="header-title">{title}</h1>
                <nav>
                    <ul className="header-list">
                        <li>Home</li>
                        <li>API</li>
                        <li>About Us</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;