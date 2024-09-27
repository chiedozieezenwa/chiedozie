import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";
import { About, Hero } from "./components";

const router = createBrowserRouter ([
    {
        path: "/", element: <Home />
    },
    {
        path: "/", element: <Hero />
    },
    {
        path: "/about", element: <About />
    }
])
export default router