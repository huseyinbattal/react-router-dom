import { useRoutes } from 'react-router-dom'
import EconomyNewsView from '../views/EconomyNewsView'
import HomeView from '../views/HomeView'
import NewView from '../views/NewView'
import ParametreView from '../views/ParametreView'
import QueryParamsViews from '../views/QueryParamsViews'
import SportsNewsView from '../views/SportsNewsView'
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
                    {
                        path: "/sporhaberleri",
                        element:<SportsNewsView/>
                    },
                    {
                        path: "/ekonomihaberleri",
                        element: <EconomyNewsView />,
                        children: [
                            {
                                path: ":id",
                            element:<EconomyNewsView/>
                           }
                        ]
}
                ]
            },
            {
                path: "*",
                element:<div>404 Not Found!!!</div>
            },

        ]
    )
  return routes
}

export default Router