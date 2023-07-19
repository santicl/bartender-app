import HomePage from "./front/templates/Homepage/HomePage";

const { BrowserRouter, Route, Routes } = require("react-router-dom");

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;