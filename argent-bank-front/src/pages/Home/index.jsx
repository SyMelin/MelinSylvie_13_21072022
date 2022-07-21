import React, { useEffect } from 'react'
import Hero from '../../components/Hero'
import Features from '../../sections/Features'
import { featureItems } from '../../utils/constantes/features'
import '../../styles/Home.css'

function Home () {

    useEffect(() => {
        document.title = 'Argent Bank - Home Page';
    })

    return (
        <main>
            <Hero />
            <Features featureItems={featureItems} /> 
        </main>
    )
}

export default Home