import Menu from '../components/Menu/menu.jsx';
import ProjectMenu from '../components/ProjectMenu/projectmenu.jsx';
import { Helmet } from 'react-helmet-async';

export default function Portfolio() {
    return <main>
        <Helmet>
            <meta name="description" content="Portfolio page" />
                <title>Lamia Ouassaa-Portfolio</title>
        </Helmet>
        
        <div className="container">  
            <div className="menulayout">
                <Menu />
            </div>  
            <div className="pageslayout">
                <div className="portfoliocontainer">
                    <div className="githubdiv">
                        Check out my projects on <a target="_blank" href="https://github.com/rosemarigold">GitHub</a>!
                    </div> 
                    <div className="projectscontainer">
                        <ProjectMenu title="Interns Management Application" paragraph="Desktop application developed in .NET WPF Framework that can manage interns and their respesctive programs.">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.39 122.88"><title>online-survey</title><path class="cls-1" d="M8.05,0h92.28a8.07,8.07,0,0,1,8.06,8.06V85.74a8.08,8.08,0,0,1-8.06,8.05H62.57v-.16c0-1.35,0-2.67-.06-4.88h38.86a2.22,2.22,0,0,0,2.22-2.23V19.46H5.12V86.52a2.1,2.1,0,0,0,.07.56A7.34,7.34,0,0,0,5,88.67a9.65,9.65,0,0,0,.86,4.17,5.15,5.15,0,0,0,.36.7l0,0A8.09,8.09,0,0,1,0,85.74V8.06A8.07,8.07,0,0,1,8.05,0ZM26.88,69.07a3.36,3.36,0,0,1,3.59,3.34V93.83h2.17V83.32c0-4.25,6.7-4.12,6.7.24v10.5l.1,0h2.35V85.68c0-4.25,6.7-4.12,6.7.23v7.76h2.36V87.76c0-4.25,6.7-4.12,6.7.23,0,4.9.28,10.68.1,15.57-.19,5.37-1.3,11.42-5.19,14.8a18.18,18.18,0,0,1-15,4.27c-9.22-1.46-11.55-7.11-15.94-14.07L10.37,90.9c-.69-1.61-.6-2.7.09-3.4,3-1.92,7.78,2.16,13.12,7.93l.19,0V72.18a3.12,3.12,0,0,1,3.11-3.11ZM17.28,40.3a3.53,3.53,0,0,1,5.86-3.92l1.91,2.1,5.61-7a3.52,3.52,0,0,1,5.44,4.48L27.62,46.15a3.77,3.77,0,0,1-.84.8,3.53,3.53,0,0,1-4.9-1l-4.6-5.68ZM88.13,68.57a3.7,3.7,0,0,0,0-7.39H49.51a3.7,3.7,0,1,0,0,7.39Zm0-26a3.7,3.7,0,0,0,0-7.39H49.51a3.7,3.7,0,1,0,0,7.39ZM17.64,54.63H36a2.51,2.51,0,0,1,2.51,2.51V72.61A2.52,2.52,0,0,1,36,75.12h-.53V72.41a8,8,0,0,0-2-5.37V59.65H20.15v8.1a8,8,0,0,0-1.34,4.43v2.94H17.64a2.52,2.52,0,0,1-2.51-2.51V57.14a2.51,2.51,0,0,1,2.51-2.51ZM92.66,7a4,4,0,1,1-4,4,4,4,0,0,1,4-4ZM65.71,7a4,4,0,1,1-4,4,4,4,0,0,1,4-4ZM79.19,7a4,4,0,1,1-4,4,4,4,0,0,1,4-4Z"/></svg>
                        </ProjectMenu>
                        <ProjectMenu title="Inventory Management Application" paragraph="Desktop application developed in .NET WinForms Framework that can manage a small business inventory.">
                            {/*<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 122.88 114.5" style="enable-background:new 0 0 122.88 114.5" xml:space="preserve"><g><path d="M118.66,9.63c0.67-0.13,1.37,0,1.95,0.35c0.99,0.41,1.69,1.38,1.69,2.52l0.57,79.58c0.05,0.98-0.43,1.95-1.33,2.48 l-32.5,19.39c-0.46,0.35-1.03,0.55-1.65,0.55c-0.15,0-0.3-0.01-0.44-0.04l-84.34-9.38C1.16,105.02,0,103.82,0,102.35V21.42h0 c-0.03-1.08,0.58-2.13,1.64-2.59l42.31-18.6l0,0c0.44-0.2,0.94-0.28,1.46-0.21L118.66,9.63L118.66,9.63z M90.14,33.86v73.06 l27.26-16.26l-0.53-73.65L90.14,33.86L90.14,33.86z M84.65,108.69V34.63l-35.97-4.59L47.5,64.41l-12.63-8.6l-12.63,7.14L24.85,27 L5.49,24.53v75.37L84.65,108.69L84.65,108.69z M78.96,9.94L52.43,25l34.51,4.4l24.19-15.24L78.96,9.94L78.96,9.94z M28.23,21.91 L53.95,6.66l-8.48-1.11L12.74,19.94L28.23,21.91L28.23,21.91z"/></g></svg>*/}
                        
                        </ProjectMenu>
                        <ProjectMenu title="Interns Food Delivery Application" paragraph="iOS Application that can manage orders in a restaurant displaying the menu, the order summary, a map for delivery and the history of orders.">
                            <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 366 511.98"><path d="M8.39 509.05c-4.75 0-8.39-3.99-8.39-9V149c0-2.17.68-4.2 1.95-5.75l40.47-70.51V8.99c0-4.93 3.66-8.99 8.27-8.99h260.83c3.98 0 7.37 3.1 8.11 7.24l4.28 70.01L366 151.5l-1.31 358.46-16.06.61-41.79.93c-85.05 1.89-221.83-2.45-298.45-2.45zm171.99-98.96-.17-91.78c-33.46-19.34-22.8-93.84 10.69-93.43 40.7.47 45.52 83.95 10.52 93.13l2.59 92.46c.49 18.18-23.61 19.86-23.63-.38zM128.87 308.4c8.67-5.93 13.03-13.67 12.28-31.37v-45.54c-.08-6.36-11.62-7.13-12.2 0l-.44 36.94c-.03 6.91-10.41 7.13-10.38 0l.44-38.21c-.14-6.82-11.16-7.51-11.29 0 0 10.61-.44 27.61-.44 38.21.55 6.69-9.1 7.57-8.85 0l.44-37.96c-.24-5.15-5.92-6.99-9.78-4.57-4.1 2.62-3.27 7.88-3.44 12.31l-1.43 43.58c.22 12.67 3.55 22.97 13.47 27.35 1.52.66 3.61 1.18 6.03 1.54l-3.41 102.6c-.19 6.31 4.96 11.46 10.98 11.46h1.38c6.81 0 12.56-5.81 12.37-12.89l-3-101.2c3.17-.49 5.78-1.24 7.27-2.25zM106.18 61.64h39v18.27h-39V61.64zm56.12 0h38.99v18.27H162.3V61.64h21.06-21.06zm55.97 0h17.93v18.27h-17.93V61.64zm84.92-43.78H58.93v43.78h30.95v18.27H57.85c-11.43 20.03-22.46 40.4-33.7 60.56h264.87l13.61-60.49c-14.15 0-34.63-.07-48.76-.07V61.64c16.24 0 32.61-.27 49.05-.27.07-14.62.14-28.96.27-43.51zm13.72 71.25-6.16 51.36h34.64l-28.48-51.36zm-8.9 69.29v332.78h38.09l-.55-332.78h-37.54zm-291.56 0v332.78h275.73V158.4H16.45z"/></svg>
                        </ProjectMenu>
                    </div>
                </div>
            </div> 
        </div>
    </main>
}