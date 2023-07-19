import '../WhyUs/whyus.style.css';

function WhyUs() {
    return (
        <section className="WhyUs">
            <div>
                <div className="WhyUs-Text-content">
                    <h2>¿Porque <span>Nosotros?</span></h2>
                    <p>porque nuestros clientes nos consideran uno de los mejores...</p>
                </div>
                <div className="WhyUs-Containers">
                    <div>
                        <span>01</span>
                        <h3>Calidad humana</h3>
                        <p>Amamos lo que hacemos y nuestro compromiso es la felicidad de de nuestros clientes en cada evento</p>
                    </div>
                    <div>
                        <span>02</span>
                        <h3>Equipo Certificado</h3>
                        <p>Somos profesionales y especializados en mixologia y elaboracion de los mejores cocteles, clasicos y nuevos</p>
                    </div>
                    <div>
                        <span>03</span>
                        <h3>Compromiso Sanitario</h3>
                        <p>No solo nos preocupamos por la comodidad y felicidad de nuestros clientes, sino tambien por la salud de nuestros clientes</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;