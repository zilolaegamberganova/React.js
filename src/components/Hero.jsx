import './Hero.css';

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                
                <div className="hero-image-wrapper">
                    <img src='/person.png' alt='Family skateboarding' className='person' />
                </div>

               
                <div className="hero-content">
                    <h2>Make wealth your own.</h2>
                    <p>Personalized, Automated, Effortless Investing and Savings.</p>
                    <button className='start-btn'>Get started</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;