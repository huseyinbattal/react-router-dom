import { useRoutes } from 'react-router-dom'
import HomeView from '../views/HomeView'
import ParametreView from '../views/ParametreView'
import UserWiew from '../views/UserWiew'


const Router = () => {
    const routes = useRoutes(
        [
            {
                path: "/",
                element:<HomeView/>
            },
            {
                path: "/kullanici",
                element:<UserWiew/>
            },
            {
                path: "/parametre/:id",
                element:<ParametreView/>
            },

        ]
    )
  
}

export default Router