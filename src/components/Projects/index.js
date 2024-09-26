import ProjectCard from '../ProjectCard'
import './index.css'


const projectsList = [
    {
      id:1,
      url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747898/tigedepwdsf49rqgg4i0.png",
      name: "Netflix Clone",
      techs: ["Html", "Css"],
      git: "https://github.com/VinayRelangi1130/nflog.git",
      hostedUrl:"https://nflog.netlify.app/"
    },
    {
        id:2,
        url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747881/ugj8ip3cqnji63zgncbc.png",
        name: "Youtube Clone",
        techs: ["React.js"],
        git: "https://vrnxtwatch.ccbp.tech/", //id and password : rahul , rahul@2021
        hostedUrl:"https://vrnxtwatch.ccbp.tech/"
      },
      {
        id:3,
        url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724751684/nwdkwfvripxcnzvon0xs.png",
        name: "Movies Website",
        techs: ["React.js"],
        git: "https://github.com/VinayRelangi1130/MoviesWebsite.git",
        hostedUrl:"https://github.com/VinayRelangi1130/MoviesWebsite.git"
      },
      
      {
        id:5,
        url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747860/bmg0sau2luruvzlgn8zi.png",
        name: "Food Munch",
        techs: ["Html", "Css", "Bootstrap"],
        git: "https://foodmunch295.ccbp.tech/",
        hostedUrl:"https://foodmunch295.ccbp.tech/"
      },
      {
        id:6,
        url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747851/yfozhrv99ssnhni2lsgq.png",
        name:"Todo-list",
        techs:["Html", "Css", "Javascript"],
        git:"https://github.com/VinayRelangi1130/todoapp.git",
        hostedUrl:"https://todo766.ccbp.tech/"
      },
      
]

const Projects = () => (
    <section id="projects" className="projects-container">
        <div className="projects-heading-container">
        <h1 className="projects-heading">Projects</h1>
    </div>
    <ul className="projects-list">
        {projectsList.map((eachProject) => <ProjectCard key={eachProject.id} details={eachProject}/> )}
    </ul>
    </section>
)

export default Projects