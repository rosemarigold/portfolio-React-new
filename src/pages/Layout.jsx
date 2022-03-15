import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return <> 
        {/* 1-Outlet: What to display
            2-Suspense: To tell the Outlet to wait
            and display the fallback if waiting */}
        <Suspense fallback={<>...</>}>
            <Outlet />
        </Suspense>
    </>
}