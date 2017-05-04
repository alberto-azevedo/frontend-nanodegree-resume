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
            bio.skills.forEach(function(skill) {
              $("#skills").append(formatHtmlTemplate(HTMLskills, skill));
              //console.log(skill);
            })
        }
        //pic
        $("#header").prepend(formatHtmlTemplate(HTMLbioPic, bio.biopic));
        //top contacts
        $("#topContacts").append(formatHtmlTemplate(HTMLmobile,
          this.contacts.mobile));
        $("#topContacts").append(formatHtmlTemplate(HTMLemail,
          this.contacts.email));
        $("#topContacts").append(formatHtmlTemplate(HTMLgithub,
          this.contacts.github));
        $("#topContacts").append(formatHtmlTemplate(HTMLlocation,
          this.contacts.location));

        //footer contacts -
        $("#footerContacts").append(formatHtmlTemplate(HTMLmobile,
          this.contacts.mobile));
        $("#footerContacts").append(formatHtmlTemplate(HTMLemail,
          this.contacts.email));
        $("#footerContacts").append(formatHtmlTemplate(HTMLgithub,
          this.contacts.github));
        $("#footerContacts").append(formatHtmlTemplate(HTMLlocation,
          this.contacts.location));

        //generic info
        var formattedRole = HTMLheaderRole.replace("%data%", "Web developer");
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", "Alberto Azevedo");
        $("#header").prepend(formattedName);
    }
};

// Work info
var work = {
    "jobs": [{
            "employer": "Banorte",
            "title": "Programmer",
            "location": "Rio de Janeiro",
            "dates": "1989, 1995",
            "description": "Bank"
        },
        {
            "employer": "Conecta",
            "title": "Analista",
            "location": "Sao Paulo",
            "dates": "1996, 2002",
            "description": "TI"
        }
    ],
    "position": "Analista",
    "display": function() {
        work.jobs.forEach(function(job) {
          //console.log(job.employer);
          $("#workExperience").append(HTMLworkStart);
          var formattedEmployer = formatHtmlTemplate(HTMLworkEmployer,
            job.employer);
          var formattedTitle = formatHtmlTemplate(HTMLworkTitle,job.title);
          var formattedEmployerTitle = formattedEmployer + formattedTitle;
          $(".work-entry:last").append(formattedEmployerTitle);

          var formattedDates = formatHtmlTemplate(HTMLworkDates, job.dates);
          $(".work-entry:last").append(formattedDates);

          var formattedDescription = formatHtmlTemplate(HTMLworkDescription,
            job.description);
          $(".work-entry:last").append(formattedDescription);
        });
    }
};

// Projects info
var projects = {
    "projects": [{
            "title": "GerIMP",
            "dates": "1991, 1992",
            "description": "Desenvolvimento de um Gerenciador de Impressoras " +
              "para agencias SNA",
            "images": "[http://lorempixel.com/400/200/]"
        },
        {
            "title": "SNA",
            "dates": "1992, 1993",
            "description": "Conversão da comunicação das agencias de BSC3 " +
              "para SNA",
            "images": "[http://lorempixel.com/400/200/]"
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
      //console.log(project.title);
      $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle = formatHtmlTemplate(HTMLprojectTitle,
        project.title);
      $(".project-entry:last").append(formattedProjectTitle);
      var formattedDates = formatHtmlTemplate(HTMLprojectTitle, project.dates);
      $(".project-entry:last").append(formattedDates);
      var formattedProjectDescription = formatHtmlTemplate(HTMLprojectTitle,
        project.description);
      $(".project-entry:last").append(formattedProjectDescription);
    });
};


// Education info
var education = {
    "schools": [{
        "name": "Universidade Catolica de Pernambuco",
        "location": "Recife",
        "degree": "BA",
        "majors": ["CompSci"],
        "dates": "1989, 1992",
        "url": ""
    }],
    "onlineCourses": [{
        "title": "Front Web Developer",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://www.udacity.com"
    }],
    "city": "Recife",
    "display": function() {

        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(school) {
        $(".education-entry:last").append(formatHtmlTemplate(HTMLschoolName,
          school.name));
        $(".education-entry:last").append(formatHtmlTemplate(HTMLschoolDates,
          school.dates));
        $(".education-entry:last").append(formatHtmlTemplate(HTMLschoolLocation,
          school.location));
        $(".education-entry:last").append(formatHtmlTemplate(HTMLschoolMajor,
          school.majors));
        });

        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse) {
          var temp = formatHtmlTemplate(HTMLonlineTitle, onlineCourse.title);
          school = temp + formatHtmlTemplate(HTMLonlineSchool,
            onlineCourse.school);
          $("#education").append(school);
          $("#education").append(formatHtmlTemplate(HTMLonlineDates,
             onlineCourse.dates));
          $("#education").append(formatHtmlTemplate(HTMLonlineURL,
            onlineCourse.url));
        });
    }
};

projects.display();
bio.display();
work.display();
education.display();

// map
$("#mapDiv").append(googleMap);
