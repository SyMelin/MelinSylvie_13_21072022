import './FeaturesItem.css'


/**
 * FeatureItem properties
 * 
 * @typedef { Object } FeatureItemProps
 * @prop { Object } featureItem
 * @prop { String } featureItem.icon
 * @prop { String } featureItem.alt - Description for the alt property of <img>
 * @prop { String } featureItem.title
 * @prop { String } featureItem.paragraphe
 */
/**
 * React component: FeatureItem
 * 
 * @type { React.FC<FeatureItemProps> }
 * @returns { React.ReactElement }
 */
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