//Source: https://ifm26039.gitlab.io/notes-de-cours/

/*import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';*/
// React Router
import { lazy } from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import { Suspense } from "react";

import './App.css';

const Home = lazy(() => import('./pages/Home'));
const ProjectsMainPage = lazy(() => import('./pages/ProjectsMainPage'));
const Project1 = lazy(() => import('./pages/ProjectsPages/Project1'));
const Project2 = lazy(() => import('./pages/ProjectsPages/Project2'));
const Project3 = lazy(() => import('./pages/ProjectsPages/Project3'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return  <Suspense fallback={<>...</>}> <Routes>
      <Route basename="/portfolio-React" path="/portfolio-React" element={<Layout />}/>
        <Route index element={<Home />}/>
        <Route path="ProjectsMainPage" element={<ProjectsMainPage />}/>
        <Route path="Project1" element={<Project1 />}/>
        <Route path="Project2" element={<Project2 />}/>
        <Route path="Project3" element={<Project3 />}/>
        <Route path="Contact" element={<Contact />}/>
      </Routes>
    </Suspense>
}
