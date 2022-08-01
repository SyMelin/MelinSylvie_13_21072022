import FeaturesItem from '../FeaturesItem'
import '../../styles/Features.css'

function FeaturesSection ({ featureItems }) {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featureItems.map((item, index) => (
                <FeaturesItem
                    key={`featureItem--${index}`}
                    featureItem={item}
                />
            ))}
        </section>
    )
}

export default FeaturesSection