

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg px-5 fw-semibold">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-content-center fs-6" href="#">
                    <svg className="align-self-center me-3" width="24" height="24" viewBox="0 0 276 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M102.811 26.3008C113.887 -7.78768 162.113 -7.78765 173.189 26.3008L180.209 47.9048C185.162 63.1497 199.368 73.4712 215.398 73.4712H238.113C273.956 73.4712 288.859 119.337 259.861 140.405L241.484 153.757C228.516 163.179 223.09 179.879 228.043 195.124L235.063 216.728C246.139 250.816 207.123 279.163 178.125 258.095L159.748 244.743C146.78 235.321 129.22 235.321 116.252 244.743L97.8745 258.095C68.8771 279.163 29.8614 250.816 40.9374 216.728L47.9569 195.124C52.9103 179.879 47.4839 163.179 34.5159 153.757L16.1385 140.405C-12.8589 119.337 2.04378 73.4712 37.8865 73.4712H60.6023C76.6317 73.4712 90.838 63.1496 95.7914 47.9048L102.811 26.3008Z" fill="black"/>
                    </svg>
                    Shoebox Wonders
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Exhibits</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Events</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}