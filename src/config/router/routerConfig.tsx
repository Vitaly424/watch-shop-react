export enum AppRoutes {
    MAIN = 'main',
    CART = 'cart',
    FULL_WATCH = 'full_watch',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CART]: '/cart',
    [AppRoutes.FULL_WATCH]: '/watch',
    [AppRoutes.NOT_FOUND]: '*',
}
