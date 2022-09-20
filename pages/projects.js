import Link from "next/link";
import proj from "../styles/Proj.module.css"
import Image from 'next/image'

const Projects = () => {
    return (
        <div className={proj.cont}>
            <div className={proj.slider}>
                    <section>
                        <div>
                            <Image src="/images/project_1.gif" width={200} height={125} alt="" />
                        </div>                    
                        <h1>Crafts Directory Web App</h1>
                        <ul>
                            <li>Name: LocalCrafts</li>
                            <li>Full Stack Web App</li>
                            <li>MongoDB, Express, NodeJS, MapBox</li>
                            <li><Link href="https://github.com/fe991e/localcrafts">Repo: Github</Link></li>
                        </ul>
                        <Link href="https://fierce-garden-44681.herokuapp.com/"><a>Visit Site</a></Link>
                    </section>
                    <section>
                        <div>
                            <Image src="/images/project_2.gif" width={200} height={125} alt="" />
                        </div>     
                        <h1>CRM App</h1>
                        <ul>
                            <li>Very Simple CRM App</li>
                            <li>App made from BackEnd Dev Training (NHT)</li>
                            <li>JAVA, MySQL, Spring(Boot, Security), MAVEN</li>
                            <li><Link href="https://github.com/fe991e/mycrmapp">Repo: Github</Link></li>
                        </ul>
                        <Link href="https://github.com/fe991e"><a>Visit Site</a></Link>
                    </section>
                    <section>
                        <div>
                            <Image src="/images/casuallife.png" width={200} height={200} alt="" />
                        </div> 
                        <h1>Project 3</h1>
                        <ul>
                            <li></li>
                        </ul>
                        <Link href="https://github.com/fe991e"><a>Visit Site</a></Link>
                    </section>
                    <section>
                        <div>
                            <Image src="/images/casuallife.png" width={200} height={200} alt="" />
                        </div>                        
                        <h1>Project 4</h1>
                        <ul>
                            <li></li>
                        </ul>
                        <Link href="https://github.com/fe991e"><a>Visit Site</a></Link>
                    </section>
                    <section>
                        <div>
                            <Image src="/images/casuallife.png" width={200} height={200} alt="" />
                        </div>
                        <h1>Project 5</h1>
                        <ul>
                            <li></li>
                        </ul>
                        <Link href="https://github.com/fe991e"><a>Visit Site</a></Link>
                    </section>
            </div>
        </div>
    );
}

export default Projects;