
import './index.css'

const Home = () => (
    <main>
        <div id="hero" className="hero-section">
        <div className="hero-container">
            <img className="hero" src="https://res.cloudinary.com/dw7b7yukf/image/upload/v1727332235/b6wdmhi4gmvdfhspmjs5.jpg" alt="hero" />
        </div>
        </div>
        <div className="name-container">
            <h1 className="hero-text"><span className="hii">Hello</span>I'm</h1>
            <h1 className="name">Vinay Relangi</h1>
            <p className="role">------ Full Stack Developer</p>
            <div className="icons-container">
                    <a className="icons" href="https://www.linkedin.com/in/relangi-vinay/" target="main" ><i className="in fa-brands fa-linkedin"></i></a>
                    <a className="icons" href="https://github.com/VinayRelangi1130" target="_main" ><i className="git fa-brands fa-github"></i></a>
                </div>
        </div>
    </main>
)

export default Home