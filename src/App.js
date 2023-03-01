import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Helpers/ScrollToTop";
import Navbar from "./components/Nav/Navbar";
import Foodplaza from "./pages/Foodplaza/Foodplaza";
import Gtr from "./pages/gtr/Gtr";
import Home from "./pages/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Workoutpal from "./pages/Workoutpal/Workoutpal";

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/foodplaza" element={<Foodplaza />} />
                    <Route
                        path="/project/workoutpal"
                        element={<Workoutpal />}
                    />
                    <Route path="/project/gtr" element={<Gtr />} />

                    <Route path="/project/portfolio" element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
