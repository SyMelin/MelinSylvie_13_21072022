import FeaturesItem from '../FeaturesItem'
import './Features.css'


/**
 * FeaturesSection properties
 * 
 * @typedef { Object } FeaturesSectionProps
 * @prop { Array.<Object> } featureItems
 */
/**
 * React component: FeaturesSection
 * 
 * @type { React.FC<FeaturesSectionProps> }
 * @returns { React.ReactElement }
 */
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