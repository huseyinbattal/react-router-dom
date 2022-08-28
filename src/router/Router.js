import { useRoutes } from 'react-router-dom'
import HomeView from '../views/HomeView'


const Router = () => {
    const routes = useRoutes(
        [
            {
                path: "/",
                element:<HomeView/>
            },
            {},

        ]
    )
  
}

export default Router