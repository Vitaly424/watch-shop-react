import './scss/app.scss';

import { Route, Routes } from 'react-router-dom';
import { routeConfig, RoutePath } from "@/config/router/routerConfig";
import { Layout } from "@/components/Layout";

function App() {
    return (
        <Routes>
            <Route path={RoutePath.main} element={<Layout />}>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Route>
        </Routes>
    );
}

export default App;
