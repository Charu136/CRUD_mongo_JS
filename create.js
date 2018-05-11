conn = new Mongo();
db = conn.getDB("pid");

db.projects.drop();
db.createCollection("projects");
// Basic insertion
result=db.projects.insert({project: "P1", projectID: 121, workspaceID: 1, user: [{userName:"Aneri", userID: 12341, email:"aneri@csueb.com"}, 
{userName:"Ami", userID: 12342, email:"ami@csueb.com"}, {userName:"Jay", userID: 12343, email:"jay@csueb.com", tasks: [{task_id: 90, task_name: "task7", created_on: new Date("December 12, 2017"), due_on: new Date("January 11, 2018")}]}, 
{userName:"Raj", userID: 12344, email:"raj@csueb.com", tasks: [{task_id: 49, task_name: "task8", created_on: new Date("January 1, 2018"), due_on: new Date("February 1, 2018")}]},
{userName:"Jonathan", userID: 34578, email: "jsmith102@csueb.com"}, 
{userName:"Eric", userID: 56372, email: "esamsung@csueb.com", tasks: [{task_id: 90, task_name: "task3", created_on: new Date("February 1, 2018"), due_on: new Date("March 11, 2018") }]}, 
{userName:"Kelly", userID: 98080, email: "kwolitzer@csueb.com"}, {userName:"Maya", userID: 12345, email:"maya@csueb.com"}, 
{userName:"Jack", userID: 69078, email: "jmatthew@csueb.com", tasks: [{task_id: 98, task_name: "task1", created_on: new Date("January 12, 2017"), due_on: new Date("January 11, 2018")}]}],
section:[{sectionID: 11, sectionName: "development"}, {sectionID: 12, sectionName: "qa"}],
});

db.projects.insert({project: "P2", projectID: 122, workspaceID: 2, user: [{userName:"Aneri", userID: 12341, email:"aneri@csueb.com"}, 
{userName:"Jay", userID: 12343, email:"jay@csueb.com"}, {userName:"Raj", userID: 12344, email:"raj@csueb.com"}, 
{userName:"Donald", userID: 23879, email: "dfischer@csueb.com"}, 
{userName:"Kelly", userID: 98080, email: "kwolitzer@csueb.com", tasks: [{task_id: 54, task_name: "task2", created_on: new Date("March 22, 2018"), due_on: new Date("September 11, 2018")}]}],
section:[{sectionID: 13, sectionName: "development"}, {sectionID: 14, sectionName: "qa"}]});

db.projects.insert({project: "P3", projectID: 123, workspaceID: 3, user: [{userName:"Aneri", userID: 12341, email:"aneri@csueb.com", tasks: [{task_id: 78, task_name: "task5", created_on: new Date("April 18, 2018"), due_on: new Date("December 20, 2018")}]}, 
{userName:"Ami", userID: 12342, email:"ami@csueb.com", tasks: [{task_id: 56, task_name: "task6"}]}, {userName:"Jay", userID: 12343, email:"jay@csueb.com"}, 
{userName:"Eric", userID: 56372, email: "esamsung@csueb.com"}, {userName:"Kelly", userID: 98080, email: "kwolitzer@csueb.com"}, 
{userName:"Maya", userID: 12345, email:"maya@csueb.com"}, {userName:"Jack", userID: 69078, email: "jmatthew@csueb.com"}], 
section:[{sectionID: 15, sectionName: "development"}, {sectionID: 16, sectionName: "qa"}]});

db.projects.insert({project: "P4", projectID: 124, workspaceID: 1, user: [{userName:"Aneri", userID: 12341, email:"aneri@csueb.com", tasks: [{task_id: 25, task_name: "task10", created_on: new Date("June 8, 2018"), due_on: new Date("August 11, 2018")}]}, 
{userName:"Ami", userID: 12342, email:"ami@csueb.com"}, {userName:"Jay", userID: 12343, email:"jay@csueb.com"}, 
{userName:"Raj", userID: 12344, email:"raj@csueb.com"}, {userName:"Jonathan", userID: 34578, email: "jsmith102@csueb.com"}, 
{userName:"Eric", userID: 56372, email: "esamsung@csueb.com"},{userName:"Kelly", userID: 98080, email: "kwolitzer@csueb.com"}, 
{userName:"Maya", userID: 12345, email:"maya@csueb.com", tasks: [{task_id: 23, task_name: "task9", created_on: new Date("January 19, 2018"), due_on: new Date("November 9, 2018")}]}, 
{userName:"Jack", userID: 69078, email: "jmatthew@csueb.com"}], 
section:[{sectionID: 17, sectionName: "development"}, {sectionID: 18, sectionName: "qa"}]});


print("success!");