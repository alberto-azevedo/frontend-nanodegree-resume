/*
This is empty on purpose! Your code to build the resume will go here.
 */
// Site data
// Bio info
var bio = {
    "name": "Alberto",
    "role": "Programmer",
    "contacts": {
        "mobile": "222-222-33333",
        "email": "me@here.com",
        "github": "alberto-azevedo",
        "location": "Recife"
    },
    "welcomeMessage": "Ola mundo!",
    "skills": ["HTML", "CSS", "Java/JavaScript"],
    "biopic": "images/fry.jpg",
    "display": function() {
        //skills
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skill in bio.skills) {
                $("#skills").append(formatHtmlTemplate(HTMLskills, bio.skills[skill]));
            }
        }
        //pic
        $("#header").prepend(formatHtmlTemplate(HTMLbioPic, bio.biopic));
        //top contacts
        $("#topContacts").append(formatHtmlTemplate(HTMLmobile, this.contacts.mobile));
        $("#topContacts").append(formatHtmlTemplate(HTMLemail, this.contacts.email));
        $("#topContacts").append(formatHtmlTemplate(HTMLgithub, this.contacts.github));

        //footer contacts -
        $("#footerContacts").append(formatHtmlTemplate(HTMLmobile, this.contacts.mobile));
        $("#footerContacts").append(formatHtmlTemplate(HTMLemail, this.contacts.email));
        $("#footerContacts").append(formatHtmlTemplate(HTMLgithub, this.contacts.github));

    }
};

// Work info
var work = {
    "jobs": [{
            "employer": "Banorte",
            "title": "Programmer",
            "location": "Rio de Janeiro",
            "dates": ["1989", "1995"],
            "description": "Bank"
        },
        {
            "employer": "Conecta",
            "title": "Analista",
            "location": "Sao Paulo",
            "dates": ["1996", "2002"],
            "description": "TI"
        }
    ],
    "position": "Analista",
    "display": function() {
        //console.log("work display funct");
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = formatHtmlTemplate(HTMLworkEmployer, work.jobs[job].employer);
            var formattedTitle = formatHtmlTemplate(HTMLworkTitle, work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = formatHtmlTemplate(HTMLworkDates, work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = formatHtmlTemplate(HTMLworkDescription, work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

// Projects info
var projects = {
    "projects": [{
            "title": "GerIMP",
            "dates": ["1991", "1992"],
            "description": "Desenvolvimento de um Gerenciador de Impressoras para agencias SNA",
            "images": []
        },
        {
            "title": "SNA",
            "dates": ["1992", "1993"],
            "description": "Conversão da comunicação das agencias de BSC3 para SNA",
            "images": []
        }
    ]
};

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = formatHtmlTemplate(HTMLprojectTitle, projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedDates = formatHtmlTemplate(HTMLprojectTitle, projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedProjectDescription = formatHtmlTemplate(HTMLprojectTitle, projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);
    }
};


// Education info
var education = {
    "schools": [{
        "name": "Universidade Catolica de Pernambuco",
        "location": "Recife",
        "degree": "BA",
        "majors": ["CompSci"],
        "dates": ["1989", "1992"],
        "url": ""
    }],
    "onlineCourses": [{
        "title": "Front Web Developer",
        "school": "Udacity",
        "dates": ["2017"],
        "url": "http://www.udacity.com"
    }],
    "city": "Recife",
    "display": function() {

        $("#education").append(HTMLschoolStart);
        for (var school in education.schools) {
            $(".education-entry:last").append(formatHtmlTemplate(HTMLschoolName, education.schools[school].name));
            $(".education-entry:last").append(formatHtmlTemplate(HTMLschoolDates, education.schools[school].dates));
            $(".education-entry:last").append(formatHtmlTemplate(HTMLschoolLocation, education.schools[school].location));
            $(".education-entry:last").append(formatHtmlTemplate(HTMLschoolMajor, education.schools[school].majors));
        }

        $("#education").append(HTMLonlineClasses);
        for (var onlineCourse in education.onlineCourses) {
            var temp = formatHtmlTemplate(HTMLonlineTitle, education.onlineCourses[onlineCourse].title);
            school = temp + formatHtmlTemplate(HTMLonlineSchool, education.onlineCourses[onlineCourse].school);
            $("#education").append(school);
            $("#education").append(formatHtmlTemplate(HTMLonlineDates, education.onlineCourses[onlineCourse].dates));
            $("#education").append(formatHtmlTemplate(HTMLonlineURL, education.onlineCourses[onlineCourse].url));
        }
    }
};

var formattedRole = HTMLheaderRole.replace("%data%", "Web developer");
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", "Alberto Azevedo");
$("#header").prepend(formattedName);

projects.display();
bio.display();
work.display();
education.display();

// map
$("#mapDiv").append(googleMap);