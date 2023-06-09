import {Link} from "react-router-dom";

export default function HeaderComponent() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black"
                           href="https://github.com/mmnoga">LottoGameApp</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/game">Game</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/check-result">Result</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}