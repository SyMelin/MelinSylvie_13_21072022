import { useEffect } from 'react'
import Hero from '../../components/Hero'
import FeaturesSection from '../../components/FeaturesSection'
import { featureItems } from '../../utils/constantes/features'
import './Home.css'


/**
 * React component: Home page
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */

function Home () {

    useEffect(() => {
        document.title = 'Argent Bank - Home Page'
    })

    return (
        <main>
            <Hero />
            <FeaturesSection featureItems={featureItems} /> 
        </main>
    )
}

export default Home