import './scss/app.scss';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header';
import { lazy, Suspense } from "react";

const NotFound = lazy(() => import('./pages/NotFound'));
const FullWatch = lazy(() => import('./pages/FullWatch'));
const Cart = lazy(() => import('./pages/Cart'));

function App() {
  return (
      <div className="App">
        <div>
          <Header />

          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cart" element={
                  <Suspense fallback={<h2>Загрузка...</h2>}>
                    <Cart />
                  </Suspense>
                } />
                <Route path="/watch/:id" element={
                  <Suspense fallback={<h2>Загрузка...</h2>}>
                    <FullWatch />
                  </Suspense>
                } />
                <Route path="*" element={
                  <Suspense fallback={<h2>Загрузка...</h2>}>
                     <NotFound />
                  </Suspense>
                } />
              </Routes>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
