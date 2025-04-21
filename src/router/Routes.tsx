import { createBrowserRouter } from "react-router-dom";
import Notes from "../pages/Notes";
import NotFoundPage from "../pages/NotFoundPage";
import Test from "../pages/Test";




export const router = createBrowserRouter([
  {path:'/',
element:<Notes/>,
errorElement:<NotFoundPage/>
},
{
  path:'/test',
  element:<Test/>
}
])