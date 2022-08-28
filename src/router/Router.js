import { Children } from 'react'
import { useRoutes } from 'react-router-dom'
import HomeView from '../views/HomeView'
import NewView from '../views/NewView'
import ParametreView from '../views/ParametreView'
import QueryParamsViews from '../views/QueryParamsViews'
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
            {
                path: "/queryparametre/",
                element:<QueryParamsViews/>
            },
            {
                path: "/haberler/",
                element: <NewView />,
                children:[

                ]
            },
            {
                path: "*",
                element:<div>404 Not Found!!!</div>
            },

        ]
    )
  
}

export default Router