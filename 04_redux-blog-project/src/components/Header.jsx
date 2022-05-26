import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="Header">
            <h2>Redux Blog</h2>
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="post">POST</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header