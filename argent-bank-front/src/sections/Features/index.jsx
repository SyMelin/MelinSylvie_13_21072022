import FeatureItem from '../../components/FeatureItem'
import '../../styles/Features.css'

function Features ({ featureItems }) {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featureItems.map((item, index) => (
                <FeatureItem
                    key={`featureItem--${index}`}
                    featureItem={item}
                />
            ))}
        </section>
    )
}

export default Features