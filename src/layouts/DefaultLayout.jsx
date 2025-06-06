import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {

    return <>
        <Header />
        <main className="bg-dark">
            <Outlet />
        </main>
    </>
};