import { RouteProps } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { CartPage } from "@/pages/CartPage";
import { FullWatchPage } from "@/pages/FullWatchPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export enum AppRoutes {
    MAIN = 'main',
    CART = 'cart',
    FULL_WATCH = 'full_watch',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CART]: '/cart',
    [AppRoutes.FULL_WATCH]: '/watch/', // + id,
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <HomePage />,
    },
    [AppRoutes.CART]: {
        path: RoutePath.cart,
        element: <CartPage />
    },
    [AppRoutes.FULL_WATCH]: {
        path: `${RoutePath.full_watch}:id`,
        element: <FullWatchPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}
