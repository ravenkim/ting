import { createBrowserRouter } from 'react-router-dom'
import Test2 from 'src/pages/Test2.jsx'
import Test1 from 'src/pages/Test1.jsx'
import ErrorPage from 'src/pages/ErrorPage/ErrorPage.jsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello world!</div>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/aa',
        element: <Test1 />,
    },
    {
        path: '/bb',
        element: <Test2 />,
    },
])
