import styles from './Welcome.module.css';

export default function Welcome(props) {
    return <>
        <div className={styles.welcome}>
            <div className={styles.aboutmeContainer}>
                <div className={styles.aboutmeContainerHeader}>          
                    <h2>Programming student</h2>
                </div>
                <p>
                    <img src={require('../resources/totoro.gif')} alt="profile" className={styles.profilepicture} />    
                    <br /><br />
                    Hi, I'm a full-time student at La Cité Collégiale studying Computer Programming in Ottawa.
                    <br/><br/>Throughout my years of studies, I was able to acquire:
                    <ul>
                        <li>strong problem-solving skills;</li>
                        <li>develop clear communication;</li>
                        <li>and build performant desktop, mobile and web application.</li>
                    </ul>
                    Check out my projects on <a target="_blank" href="https://github.com/rosemarigold">GitHub</a>!
                </p>
            </div>       
            <div className={styles.skillsContainer}>
            
                <h2>Skills</h2>
                <div className={styles.skillscontainer}>
                    <div className={styles.skills}>
                        <div className={styles.skillstitle}>C#/C++</div>
                        <img src={require('../resources/skills/csharp_cplusplus.jpg')} alt="c#c++" className={styles.rectangle}/> 
                        <div className={styles.skillsbody}>Built various academic project such as desktop applications and in video game projects.</div>
                    </div>

                    <div className={styles.skills}>
                        <div className={styles.skillstitle}>Java</div>
                        <img src={require('../resources/skills/java.png')} alt="java" className={styles.square}/> 
                        <div className={styles.skillsbody}>Built mobile applications using Android Studio.</div>
                    </div>

                    <div className={styles.skills}>
                        <div className={styles.skillstitle}>.NET Framework</div>
                        <img src={require('../resources/skills/dot_net_framework.png')} alt="dotnet" className={styles.square}/> 
                        <div className={styles.skillsbody}>Developed desktop applications using WPF and WinForm.</div>
                    </div>

                    <div className={styles.skills}>
                        <div className={styles.skillstitle}>HTML, CSS &#38; JS</div>
                        <img src={require('../resources/skills/web.jpg')} alt="c#c++" className={styles.rectangle}/> 
                        <div className={styles.skillsbody}>Developed websites using Node.js and React.</div>
                    </div>

                    <div className={styles.skills}>
                        <div className={styles.skillstitle}>SQL Server</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 18.055v2.458c0 1.925-4.655 3.487-10 3.487-5.344 0-10-1.562-10-3.487v-2.458c2.418 1.738 7.005 2.256 10 2.256 3.006 0 7.588-.523 10-2.256zm-10-3.409c-3.006 0-7.588-.523-10-2.256v2.434c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.434c-2.418 1.738-7.005 2.256-10 2.256zm0-14.646c-5.344 0-10 1.562-10 3.488s4.656 3.487 10 3.487c5.345 0 10-1.562 10-3.487 0-1.926-4.655-3.488-10-3.488zm0 8.975c-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256z"/></svg>
                        <div className={styles.skillsbody}>Used to host websites and applications. Also learned MySQL, MongoDB, Cassandra.</div>
                    </div>

                    <div className={styles.skills}>
                        <div className={styles.skillstitle}>Data structures</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 18v-7h-9v-5h3v-6h-8v6h3v5h-9v7h-2v6h6v-6h-2v-5h7v5h-2v6h6v-6h-2v-5h7v5h-2v6h6v-6z"/></svg>
                        <div className={styles.skillsbody}>Built simple application using the notions of vectors, stacks, queues, lists and sorting algorithms.</div>
                    </div>
                </div>
           
            </div>     
        </div>
    </>
}