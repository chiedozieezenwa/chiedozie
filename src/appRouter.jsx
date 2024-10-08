import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";
import { About, Contacts, Projects, Resume, Skills } from "./components";

const router = createBrowserRouter ([
    {
        path: "/", element: <Home />
    },
    {
        path: "/about", element: <About />
    },
    {
        path: "/resume", element: <Resume />
    },
    {
        path: "/skills", element: <Skills />
    },
    {
        path: "/projects", element: <Projects />
    },
    {
        path: "/contact", element: <Contacts />
    }
])
export default router