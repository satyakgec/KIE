const courses = [
    {
        id: 1,
        title: "OSPF CLI ISSUE",
        slug: "java-basic",
        authorId: 1,
        category: "CLI",
        description:"OSPF ISSUE",
        NOS: 12
        
        
    },
    {
       id: 2,
       title: "OSPF CONTROL PLANE ISSUE",
       slug: "build-java-rest-spring",
       authorId: 1,
       category: "CONTROL PLANE",
       description:"OSPF ISSUE",
       NOS: 15
       
   },
   {
       id: 3,
       title: "OSPF DATA PLANE ISSUE",
       slug: "code-refactor",
       authorId: 2,
       category: "DATA PLANE",
       NOS:11,
       Description:"OSPF ISSUE"
   },
   {
       id: 4,
       title: "LDP DATA PLANE ISSUE",
       slug: "building-javascript-dev-environment",
       authorId: 3,
       category: "DATA PLANE",
       NOS:9,
       Description:"LDP ISSUE"
   },
   {
       id: 5,
       title: "LDP CONTROL PLANE ISSUE",
       slug: "react-redux-react",
       authorId: 3,
       category: "CONTROL PLANE",
       NOS: 30,
       Description:"LDP ISSUE"
   },
   {
       id: 6,
       title: "LDP CLI ISSUE",
       slug: "design-patterns",
       authorId: 2,
       category: "CLI",
       NOS: 31,
       Description:"LPD ISSUE"
   },
   {
       id: 7,
       title: "BGP CLI ISSUE",
       slug: "writing-clean-code-humans",
       authorId: 1,
       category: "CLI",
       NOS:35,
       Description:"BGP ISSUE"
   },
   {
       id: 8,
       title: "BGP DATA PLANE ISSUE",
       slug: "time-management",
       authorId: 2,
       category: "DATA PLANE",
       NOS:4,
       Description:"BGP ISSUE"
   },
   {
       id: 9,
       title: "BGP CONTROL PLANE ISSUE",
       slug: "javascript-fundamental",
       authorId: 3,
       category: "CONTROL PLANE",
       NOS:90,
       Description:"BGP ISSUE"
   },
   {
       id: 10,
       title: "NPAPI ISSUE",
       slug: "web-components",
       authorId: 1,
       category: "NPAPI",
       NOS:88,
       Description:"NPAPI ISSUE"
   }
];

const authors =[
    { id: 1, name: "CLI"},
    { id: 2, name: "CONTROL PLANE"},
    { id: 3, name: "DATA PLANE"}
];
 
const newCourse = {
    id: null,
    title: "",
    authorId: null,
    category: ""
};

//Using CommonJs style export so we can consume via Node(without using Babel-node)
module.exports ={
    newCourse,
    courses,
    authors
}