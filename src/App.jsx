//Source: https://ifm26039.gitlab.io/notes-de-cours/

// React Router
import { lazy } from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import { Suspense } from "react";

import './App.css';

const Home = lazy(() => import('./pages/Home'));

export default function App() {
  return  <Suspense fallback={<>...</>}> 
      <Routes>
        <Route path="/portfolio-React" element={<Layout />}/>
        <Route index element={<Home />}/>
      </Routes>
    </Suspense>
}
