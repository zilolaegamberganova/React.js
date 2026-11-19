import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <img className="hero-img" src="/person.png" alt="Family skateboarding" />

      <div className="hero-content">
        <h2 className="hero-title">Make wealth your own.</h2>
        <p className="hero-text">
          Personalized, Automated, Effortless Investing and Savings.
        </p>
        <button className="hero-btn">Get started</button>
      </div>
    </section>
  )
}

export default Hero
