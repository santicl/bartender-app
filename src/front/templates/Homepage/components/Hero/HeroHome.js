import BartenderOne from '../../../../../img/bartender.jpg';
import '../Hero/hero.style.css';

function HeroHome() {
    return (
        <section className="HeroHome">
            <div className="HeroHome-Container-carrousel">
                <div style={{ backgroundImage: `url(${BartenderOne})` }} className="Carrousel-one">
                    <div className='Carrousel-one-item'>
                        <h3>B & M V.I.P</h3>
                        <p>
                            Brindamos la mejor calidad en servicios como: Bartenders, Meseros, Planeacion de eventos; personal calificado y capacidado con normatividad de sanidad vigente.
                        </p>
                        <button>Reservar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroHome;