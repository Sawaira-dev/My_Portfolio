import pic1 from "../assets/project img/project 1 pic.png"
import pic2 from "../assets/project img/project 2 pic.png"
import pic3 from "../assets/project img/project 3 pic.png"
import pic4 from "../assets/project img/project 4 pic.png"

const project=[
  {
    key: 1,
    title: "NClicks",
    imageSrc: pic1,
    description: "NClicks employs a hands-on approach to photography education",
    demo: "https://sawaira-dev.github.io/Project2-Bootstrap/",
    source: "https://www.github.com"
  },
  {
    key: 2,
    title: "Weather Forecasting",
    imageSrc: pic2,
    description: "This is weather Forecasting site.Fetch data of 'openweathermap' by using axios!",
    demo: "https://weather-forecasting-app-reactjs.netlify.app/",
    source: "https://www.github.com"
  },
  {
    key: 3,
    title: "Dictionary",
    imageSrc: pic3,
    description: "to knowing th meaning of words and for its correct pronunciation",
    demo: "https://sawaira-dev.github.io/My-Dictionary/",
    source: "https://www.github.com"
  },
  {
    key: 4,
    title: "Scientific Calculator",
    imageSrc: pic4,
    description: "Our calculator make the scientific calculation precise and quick",
    demo: "https://sawaira-dev.github.io/calculator/",
    source: "https://www.github.com"
  }
]

export const Projects = () => {
  return (
    <>
      <div id='projects' className=" projects">
        <h1 className='section-heading'>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center gap-30">
          {project.map((data) => (
            <div key={data.id} className="project-card  text-light"
                style={{

                  border: '1px solid yellow',
                  // boxShadow: '5px 5px 10px 10px rgba(101, 175, 10, 0.5)'
                }}>
                <div className="img d-flex justify-content-center align-content-center">
                  <img src={data.imageSrc} className="card-img-top mt-3" alt={data.title}
                    style={{
                      width: "260px",
                      border: '2px solid yellow',
                      borderRadius: '10px',
                    }}
                    data-aos="flip-right"
                    data-aos-duration="1000" />
                </div>
                <div className="card-body text-center ">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>

                  <a href={data.demo} className="btn btn-primary m-4">Demo</a>
                  <a href={data.source} className="btn btn-warning">Code</a>

                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};
