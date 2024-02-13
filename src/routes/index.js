import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "@pages/Home";
import { Favorites } from '../pages/Favorites';


export const RouteHandler = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path="favorites" element={<Favorites />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}