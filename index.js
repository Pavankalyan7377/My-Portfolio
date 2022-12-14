const Skills = [
  "Python",
  "C",
  "SQL",
  "Html",
  "Css",
  "Java Script",
  "Git",
  "Ms Office"
];
const projects = [{name:"Orbitz Clone" ,description:"This is a clone website of The Orbitz booking website which serves purpose of booking of flight tickets,hotels and holidays.", stack:["html", "Css", "Js"], SourceCode:"https://github.com/praneeth516/unit2_orbitz", deployed:'https://orbitsz.netlify.app/',src: "orbitz ref img.png"},
                  {name:"The HomeDepot Clone" ,description:"This is an clone website of The homedepot e-commerce website which serves the purpose of buying furniture for both commercial and household purposes.", stack:["html", "Css", "Js"], SourceCode:"https://github.com/praneeth516/unit3_thehomedepot", deployed:'https://resilient-puppy-1642cb.netlify.app/', src:"homedepot ref img.png"} ]
const education = [{ degree: "BSC Computers", college: "Sri Venkateswara degree college", from: "Mar 2017", to: "Dec 2020" },
{ degree: "Intermediate", college: "Narayana Jr College", from: "Mar 2015", to: "Jul 2017" },
{ degree: "SSC", college: "Montessori Smart School", from: "Mar 2014", to: "Feb 2015" }];

Skills.map((ele) => {
  const skill = document.getElementById("Skills");
  const s = document.createElement("p");
  s.innerHTML = ele;
  s.className = "skill";
  skill.append(s);
});
// Experience

projects.map((ele) => {
  const Projects = document.getElementById("Projects");
  const card = document.createElement("div");
  card.className = "card"
  card.onmouseover= function(){
    document.getElementById(ele.name).style = "visibility:visible"
  }
  card.onmouseleave= function(){
    document.getElementById(ele.name).style = "visibility:hidden"
  }

  const imglinks = document.createElement("div");
  imglinks.className="imglinks"
  const img=document.createElement("img");
  img.src = ele.src
  
  const linksdiv = document.createElement("div");
  linksdiv.className = "linksdiv";
  linksdiv.id= ele.name;

  const gitlink = document.createElement("a");
  gitlink.href = ele.SourceCode;
  gitlink.target = "_blank"
  const github = document.createElement("i");
  github.className = "fa-brands fa-github"
  gitlink.append(github);
  linksdiv.append(gitlink);

  const viewlink = document.createElement("a");
  viewlink.href=ele.deployed;
  viewlink.target="_blank"
  const view = document.createElement("i");
  view.className = "fa-solid fa-eye"
  viewlink.append(view)
  linksdiv.append(viewlink);
  
  imglinks.append(img, linksdiv)

  const name = document.createElement("p");
  name.className = "Proj_name"
  name.innerHTML= ele.name
  const description= document.createElement("p");
  description.className = "desc_name"
  description.innerHTML= ele.description
  const tech = document.createElement("p")
  tech.innerHTML="Tech Stack"
  tech.className="colortxt"
  const stack = document.createElement("div");

  ele.stack.map((i) => {
    const tstack = document.createElement("p");
    tstack.className = "Tskill"
    tstack.innerHTML=i
    stack.append(tstack);
  })
  card.append(imglinks,name,description, tech, stack);
  Projects.append(card);
})


education.map((ele) => {
  const Education = document.getElementById("Education");

  const card = document.createElement("div");
  card.className="education_card"

  const logo = document.createElement("i");
  logo.className="fa-solid fa-book-open"

  const data = document.createElement("div");
  data.className="education_data"
  const type = document.createElement("p");
  type.className="education_type"
  type.innerHTML=ele.degree;
  const name = document.createElement("p");
  name.className="education_name"
  name.innerHTML= ele.college;
  data.append(type, name);

  const date = document.createElement("p")
  date.className="education_date"
  date.innerHTML = `${ele.from} - ${ele.to}`

  card.append(logo, data, date);
  Education.append(card);
})