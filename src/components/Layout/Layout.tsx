import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Loader } from "@/components/Loader";
import { Suspense } from "react";

export const Layout = () => {
    return (
        <div className="App">
            <div>
                <Header />

                <div className="content">
                    <div className="container">
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}
