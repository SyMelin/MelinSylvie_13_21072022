import { useEffect } from 'react'

import { useDispatch, useSelector, useStore } from 'react-redux'
//import { fetchOrUpdateUser } from '../../utils/features/user'

//import { selectUser  } from '../../utils/selectors'
import Hero from '../../components/Hero'
import Features from '../../sections/Features'
import { featureItems } from '../../utils/constantes/features'
import '../../styles/Home.css'

function Home () {

    /*
    const user = useSelector(selectUser);

    const store = useStore()

    useEffect (() => {
        fetchOrUpdateUser(store);
    }, [store])*/

   





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