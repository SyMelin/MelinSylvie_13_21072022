import bankTree from '../../assets/bank-tree.jpeg'
import '../../styles/Hero.css'

function Hero () {
    return (
        <div className="hero" style={{backgroundImage: `url(${bankTree})`}}>
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

export default Hero