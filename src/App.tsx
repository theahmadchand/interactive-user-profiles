import { Route, Routes, BrowserRouter } from "react-router-dom";
import { FilterProvider, QueryClientProvider } from "./common/providers";
import { Users, UserDetail } from "./pages";
import "./App.css";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Users />} />
            <Route path="user/:userId" element={<UserDetail />} />
        </Routes>
    );
}

export default function App() {
    return (
        <QueryClientProvider>
            <BrowserRouter>
                <FilterProvider>
                    <AppRoutes />
                </FilterProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
}
