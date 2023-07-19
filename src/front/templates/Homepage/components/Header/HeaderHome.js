import '../Header/header.style.css';

function HeaderHome() {
    return (
        <header>
            <nav>
                <a>
                    B & M
                </a>
                <ul>
                    <li>
                        <a>
                        Inicio
                        </a>
                    </li>
                    <li>
                        <a>
                        Sobre Nosotros
                        </a>
                    </li>
                    <li>
                        <a>
                        Menu
                        </a>
                    </li>
                    <span> Servicios
                        <ul>
                            <li>Bartender</li>
                            <li>Meseros</li>
                            <li>Chef</li>
                        </ul>
                    </span>
                    <li>
                        <a>
                        Calcular Presupuesto
                        </a>
                    </li>
                    <li>
                        <button>Contactame</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderHome;