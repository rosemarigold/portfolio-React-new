//Source: https://ifm26039.gitlab.io/notes-de-cours/

// React Router
import { lazy } from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import { Suspense } from "react";

import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Skills = lazy(() => import('./pages/Skills'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Project1 = lazy(() => import('./pages/Projects/Project1'));
const Project2 = lazy(() => import('./pages/Projects/Project2'));
const Project3 = lazy(() => import('./pages/Projects/Project3'));

export default function App() {
  return  <Suspense fallback={<>...</>}><Routes>
        <Route path="/portfolio-React" element={<Layout />}/>
        <Route index element={<Home />}/>
        <Route path="Skills" element={<Skills />}/>
        <Route path="Portfolio" element={<Portfolio />}/>
        <Route path="Contact" element={<Contact />}/>
        <Route path="Project1" element={<Project1 />}/>
        <Route path="Project2" element={<Project2 />}/>
        <Route path="Project3" element={<Project3 />}/>
      </Routes>
    </Suspense>
}
