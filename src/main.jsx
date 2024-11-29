import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCow from './Components/AddCow.jsx';
import UpdateCow from './Components/UpdateCow.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:3000/cow'),
  },
  {
    path:"/addCow",
    element: <AddCow></AddCow>,
  },
  {
    path: '/updateCow',
    element: <UpdateCow></UpdateCow>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
