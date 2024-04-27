import { Route, Outlet, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home'
import About from './pages/About'
import Techstack from './pages/Techstack'
import Project from "./pages/Project";
import Contact from './pages/Contact'

const RootLayout = () => {
    return <div className="min-h-screen overflow-hidden container mx-auto w-[90%]">
        <Header />
        <Outlet />
    </div>
}

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="techstack" element={<Techstack />}></Route>
            <Route path="project" element={<Project />}></Route>
            <Route path="contact" element={<Contact />}></Route>
        </Route>
    )
)

export default Router;