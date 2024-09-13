export const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 rounded-lg",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 rounded-lg",
      titleClassName: "justify-center",
      img: "/grid.svg",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for Data.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Working on Data Science & Machine Learning projects",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 rounded-lg",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Accidents of Medellín Web App",
      des: "A Python Streamlit app that analyzes and visualizes Medellín traffic accidents (2014-2021) with maps, charts, and top locations by severity, using data from MEData.gov.co",
      img: "/med.png",
      iconLists: ["/python.svg", "/streamlit.svg", "/pandas.svg", "/ploty.svg", "github.svg"],
      link: "https://accidentesmedellin.streamlit.app/",
    },
    {
      id: 2,
      title: "Kidney Disease Classification Web App",
      des: "An interactive website using machine learning to classify kidney cancer images.",
      img: "/kdcls.png",
      imgClassName: "rotated-image",
      iconLists: ["/python.svg", "/tf.svg", "/mlflow.svg", "/dvc.svg", "/aws.svg"],
      link: "https://github.com/CJ7MO/Kidney-Disease-Classification-Deep-Learning-Project",
    },
    {
      id: 3,
      title: "Computer Vision Project Football Analysis",
      des: "A project using YOLO to detect and track players, cluster teams with Kmeans, and measure ball possession, movement, speed, and distance in football videos.",
      img: "/scs.png",
      iconLists: ["/python.svg", "/yolo.svg", "/opencv.svg","scikit-learn.svg", "/matplotlib.svg"],
      link: "https://github.com/CJ7MO/Football-Analysis-Project",
    },
    {
      id: 4,
      title: "Text Summarizer API",
      des: "A Flask API for text summarization using Transformers and Natural Language Tool Kit",
      img: "/summary.png",
      iconLists: ["/python.svg", "/hf.svg", "/tf.svg", "/FastAPI.svg", "/aws.svg"], 
      link: "https://github.com/CJ7MO/Text-Summarization-NLP-Project",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Working with Cristian was an enriching experience. He is enthusiastic, passionate and always willing to help, with great leadership and decision making skills. His technical level is excellent and he is always looking for the best results, Cristian is the ideal partner and he is a pleasure to work with.",
      name: "Miguel Angel",
      title: "Software Engineer",
      img:"ma.png"
    },
    {
      quote:
        "As a Doctor, I worked with Cristian in public health data analysis, where he applied machine learning to identify patterns in disease behavior. His technical approach allowed us to obtain key information for decision making in health, demonstrating his professionalism and exceptional skills in data science.",
      name: "Christian Alexis",
      title: "Senior Health Strategic Planning Leader",
      img:"ca.png"
    },
    {
      quote:
        "Cristian is a professional with high management skills, which allow him to lead processes, develop strategies and guide decision making, combined with assertive communication, teamwork and discipline. It is a pleasure to count him among my professional contacts as a consulting engineer and consultant in data analytics. To make dec",
      name: "Oscar Mayorga",
      title: "PHD. Industrial Engineering",
      img:"om.png"
    },
    {
      quote:
        "Working with Cristian was an excellent experience. His deep technical expertise, problem-solving skills, and ability to clearly communicate complex concepts make him stand out. His strong work ethic and commitment to quality make him an invaluable team member, and I highly recommend him for any technical challenge.",
      name: "Diego Fernando",
      title: "QA Tester Engineer",
      img:"df.png"
    },
    {
      quote:
        "Working with Cristian has been a very positive experience. His ability to build and optimize ETL pipelines and his understanding of backends focused on data management make him stand out. His dedication and focus on detail make him a valuable member of any data team.",
      name: "Jhon Erick",
      title: "Senior Backend Engineer",
      img:"je.png"
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Data Analytics Engineer Intern",
      desc: "Performed data analysis, cleaning, and transformation on large datasets using Python and SQL, optimizing data workflows for reporting kpi's.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "ETL & Backend Developer",
      desc: "Designed and maintained data pipelines with Python, Java, and AWS, ensuring efficient data processing and integration.",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance Data Solutions",
      desc: "Business Intelligence projects leveraging Python, SQL, and Power BI for data-driven insights",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Data Analytics Consultant",
      desc: "Consulting services focused on data-driven decision-making to optimize business outcomes.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      href:"https://github.com/CJ7MO"
    },
    {
      id: 2,
      img: "/x.svg",
      href:"https://x.com/cj7mo_ds"
    },
    {
      id: 3,
      img: "/link.svg",
      href: "https://www.linkedin.com/in/cj7mo/"
    },
  ];
  