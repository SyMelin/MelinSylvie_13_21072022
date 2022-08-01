import '../../styles/FeaturesItem.css'

function FeatureItem ({ featureItem }) {
    return (
        <div className="feature-item">
            <img
                src={featureItem.icon}
                alt={featureItem.alt}
                className="feature-icon"
            />
            <h3 className="feature-item-title">{featureItem.title}</h3>
            <p>
                {featureItem.paragraphe}
            </p>
        </div>
    )
}

export default FeatureItem