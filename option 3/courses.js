/*==================================================
Construction Technology & Management Challenge
courses.js
Official Curriculum Database
==================================================*/

const courses = [

/*==================================================
YEAR I SEMESTER I
==================================================*/

{
year:1,
semester:1,
course:"Communication Skills",
code:"Enla1011",
ects:5,
prerequisite:"None"
},

{
year:1,
semester:1,
course:"Civic and Ethics",
code:"CESt1023",
ects:5,
prerequisite:"None"
},

{
year:1,
semester:1,
course:"Engineering Drawing",
code:"CoTM1052",
ects:5,
prerequisite:"None"
},

{
year:1,
semester:1,
course:"Applied Mathematics I",
code:"Math1041",
ects:6,
prerequisite:"None"
},

{
year:1,
semester:1,
course:"Engineering Mechanics I",
code:"CoTM1031",
ects:5,
prerequisite:"None"
},

{
year:1,
semester:1,
course:"Introduction to Engineering Profession",
code:"CoTM1051",
ects:3,
prerequisite:"None"
},

/*==================================================
YEAR I SEMESTER II
==================================================*/

{
year:1,
semester:2,
course:"Introduction to Logic",
code:"Phil1033",
ects:3,
prerequisite:"None"
},

{
year:1,
semester:2,
course:"Workshop Practice",
code:"CoTM1053",
ects:3,
prerequisite:"None"
},

{
year:1,
semester:2,
course:"Applied Mathematics II",
code:"Math1042",
ects:6,
prerequisite:"Applied Mathematics I"
},

{
year:1,
semester:2,
course:"Construction Materials I",
code:"CoTM1061",
ects:5,
prerequisite:"None"
},

{
year:1,
semester:2,
course:"Strength of Materials",
code:"CoTM1101",
ects:5,
prerequisite:"Engineering Mechanics I"
},

{
year:1,
semester:2,
course:"Construction Drafting",
code:"CoTM1081",
ects:5,
prerequisite:"Engineering Drawing"
},

{
year:1,
semester:2,
course:"Basic Writing Skills",
code:"Enla1012",
ects:5,
prerequisite:"Communication Skills"
},

/*==================================================
YEAR II SEMESTER I
==================================================*/

{
year:2,
semester:1,
course:"Construction Material II",
code:"CoTM2062",
ects:5,
prerequisite:"Construction Materials I"
},

{
year:2,
semester:1,
course:"Construction Working Drawing",
code:"CoTM2083",
ects:4,
prerequisite:"Construction Drafting"
},

{
year:2,
semester:1,
course:"Introduction to Management",
code:"CoTM2121",
ects:5,
prerequisite:"None"
},

{
year:2,
semester:1,
course:"Theory of Structure",
code:"CoTM2102",
ects:5,
prerequisite:"Strength of Materials"
},

{
year:2,
semester:1,
course:"Building Construction I",
code:"CoTM2071",
ects:5,
prerequisite:"Construction Drafting"
},

{
year:2,
semester:1,
course:"Computer Aided Drafting and Data Analysis",
code:"CoTM2082",
ects:4,
prerequisite:"Construction Drafting"
},

/*==================================================
YEAR II SEMESTER II
==================================================*/

{
year:2,
semester:2,
course:"Building Construction II",
code:"CoTM2072",
ects:5,
prerequisite:"Building Construction I"
},

{
year:2,
semester:2,
course:"Design of Reinforced Concrete Structures",
code:"CoTM2111",
ects:5,
prerequisite:"Theory of Structure"
},

{
year:2,
semester:2,
course:"Hydraulics",
code:"CoTM2131",
ects:5,
prerequisite:"None"
},

{
year:2,
semester:2,
course:"Principles of Construction Management",
code:"CoTM2151",
ects:5,
prerequisite:"Introduction to Management"
},

{
year:2,
semester:2,
course:"Soil Mechanics",
code:"CoTM2171",
ects:5,
prerequisite:"Strength of Materials"
},

{
year:2,
semester:2,
course:"Introduction to Economics",
code:"CoTM2122",
ects:5,
prerequisite:"None"
},

/*==================================================
YEAR III SEMESTER I
==================================================*/

{
year:3,
semester:1,
course:"Principles of Accounting",
code:"CoTM2123",
ects:5,
prerequisite:"None"
},

{
year:3,
semester:1,
course:"Foundation Engineering",
code:"CoTM3172",
ects:5,
prerequisite:"Soil Mechanics"
},

{
year:3,
semester:1,
course:"Human Resource Management",
code:"CoTM3161",
ects:4,
prerequisite:"Principles of Construction Management"
},

{
year:3,
semester:1,
course:"Water Supply and Treatment",
code:"CoTM3132",
ects:4,
prerequisite:"Hydraulics"
},

{
year:3,
semester:1,
course:"Surveying",
code:"CoTM3181",
ects:6,
prerequisite:"None"
},

{
year:3,
semester:1,
course:"Construction Equipment and Plant Management",
code:"CoTM3163",
ects:4,
prerequisite:"Principles of Construction Management"
},

{
year:3,
semester:1,
course:"Design of Steel and Timber Structure",
code:"CoTM3112",
ects:5,
prerequisite:"Theory of Structure"
},

/*==================================================
YEAR III SEMESTER II
==================================================*/

{
year:3,
semester:2,
course:"Highway Engineering I",
code:"CoTM3191",
ects:5,
prerequisite:"Surveying"
},

{
year:3,
semester:2,
course:"Construction Planning and Scheduling",
code:"CoTM3211",
ects:5,
prerequisite:"Principles of Construction Management"
},

{
year:3,
semester:2,
course:"Sewage Disposal and Treatment",
code:"CoTM3141",
ects:5,
prerequisite:"Water Supply and Treatment"
},

{
year:3,
semester:2,
course:"Architectural Planning and Design",
code:"CoTM3093",
ects:5,
prerequisite:"Engineering Drawing"
},

{
year:3,
semester:2,
course:"Construction Site Supervision",
code:"CoTM3221",
ects:4,
prerequisite:"Building Construction I"
},

{
year:3,
semester:2,
course:"Construction Specification and Quantity Surveying",
code:"CoTM3201",
ects:6,
prerequisite:"Building Construction I"
},

/*==================================================
YEAR IV SEMESTER I
==================================================*/

{
year:4,
semester:1,
course:"Internship",
code:"CoTM4251",
ects:30,
prerequisite:"None"
},

/*==================================================
YEAR IV SEMESTER II
==================================================*/

{
year:4,
semester:2,
course:"Construction Financial Management",
code:"CoTM4162",
ects:5,
prerequisite:"Principles of Accounting"
},

{
year:4,
semester:2,
course:"Highway Engineering II",
code:"CoTM4192",
ects:5,
prerequisite:"Highway Engineering I"
},

{
year:4,
semester:2,
course:"Design and Construction of Water Works",
code:"CoTM4142",
ects:5,
prerequisite:"Water Supply and Treatment"
},

{
year:4,
semester:2,
course:"Entrepreneurship",
code:"CoTM4262",
ects:4,
prerequisite:"Introduction to Management"
},

{
year:4,
semester:2,
course:"Probability and Statistics",
code:"CoTM4242",
ects:4,
prerequisite:"Applied Mathematics I"
},

{
year:4,
semester:2,
course:"Construction Law",
code:"CoTM4232",
ects:5,
prerequisite:"None"
},

{
year:4,
semester:2,
course:"Computer Based Construction Planning",
code:"CoTM4212",
ects:4,
prerequisite:"Construction Planning and Scheduling"
},

/*==================================================
YEAR V SEMESTER I
==================================================*/

{
year:5,
semester:1,
course:"Procurement Management and Contract Management",
code:"CoTM5231",
ects:5,
prerequisite:"Construction Law"
},

{
year:5,
semester:1,
course:"Holistic Project",
code:"CoTM5291",
ects:6,
prerequisite:"All Core Courses"
},

{
year:5,
semester:1,
course:"Cost Engineering",
code:"CoTM5202",
ects:5,
prerequisite:"Construction Financial Management"
},

{
year:5,
semester:1,
course:"Construction Performance and Resource Optimization",
code:"CoTM5164",
ects:5,
prerequisite:"Principles of Construction Management"
},

{
year:5,
semester:1,
course:"Construction Health and Safety Management",
code:"CoTM5221",
ects:4,
prerequisite:"None"
},

{
year:5,
semester:1,
course:"Technical Report Writing and Research Methods",
code:"CoTM5241",
ects:3,
prerequisite:"Basic Writing Skills"
},

{
year:5,
semester:1,
course:"Railway Construction",
code:"CoTM5191",
ects:4,
prerequisite:"Highway Engineering II"
},

/*==================================================
YEAR V SEMESTER II
==================================================*/

{
year:5,
semester:2,
course:"Bridge and Tunnel Construction",
code:"CoTM5192",
ects:4,
prerequisite:"Highway Engineering II"
},

{
year:5,
semester:2,
course:"BSc Research",
code:"CoTM5292",
ects:8,
prerequisite:"None"
},

{
year:5,
semester:2,
course:"Development and Construction Economics",
code:"CoTM5261",
ects:5,
prerequisite:"Introduction to Economics"
},

{
year:5,
semester:2,
course:"Modern Construction Technology",
code:"CoTM5272",
ects:3,
prerequisite:"Building Construction II"
},

{
year:5,
semester:2,
course:"Cost Efficient Construction",
code:"CoTM5271",
ects:4,
prerequisite:"Building Construction I"
},

{
year:5,
semester:2,
course:"Elective",
code:"",
ects:4,
prerequisite:"Depends on Selected Elective"
}

];