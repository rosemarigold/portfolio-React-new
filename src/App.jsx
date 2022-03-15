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
      <Route exact path="/" element={<Layout />}/>
        <Route index element={<Home />}/>
        <Route exact path="ProjectsMainPage" element={<ProjectsMainPage />}/>
        <Route exact path="Project1" element={<Project1 />}/>
        <Route exact path="Project2" element={<Project2 />}/>
        <Route exact path="Project3" element={<Project3 />}/>
        <Route exact path="Contact" element={<Contact />}/>
      </Routes>
    </Suspense>
}
