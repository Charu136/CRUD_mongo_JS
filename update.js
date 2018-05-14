
//Updating the task fields once it is completed - Removing Due on and adding completed status
var taskUpdate = db.projects.findOne({"projectID":"124"}, {"user.tasks.task_id": "23"});
taskUpdate.user.tasks.completed_on = new Date("January 6, 2018 13:06");
delete taskUpdate.user.tasks.due_on;
result = db.projects.find({"projectID":"124"});
print('Result after Updating the task fields once it is completed');
while(result.hasNext()){
printjson(result.next());
}

//OUTPUT
/*
{project: "P4", projectID: 124, workspaceID: 1, user: [{userName:"Aneri", userID: 12341, email:"aneri@csueb.com", tasks: [{task_id: 25, task_name: "task10", created_on: new Date("June 8, 2018"), due_on: new Date("August 11, 2018")}]}, 
{userName:"Ami", userID: 12342, email:"ami@csueb.com"}, {userName:"Jay", userID: 12343, email:"jay@csueb.com"}, 
{userName:"Raj", userID: 12344, email:"raj@csueb.com"}, {userName:"Jonathan", userID: 34578, email: "jsmith102@csueb.com"}, 
{userName:"Eric", userID: 56372, email: "esamsung@csueb.com"},{userName:"Kelly", userID: 98080, email: "kwolitzer@csueb.com"}, 
{userName:"Maya", userID: 12345, email:"maya@csueb.com", tasks: [{task_id: 23, task_name: "task9", created_on: "January 19, 2018", completed_on: "January 6, 2018 13:06"}]}, 
{userName:"Jack", userID: 69078, email: "jmatthew@csueb.com"}], 
section:[{sectionID: 17, sectionName: "development"}, {sectionID: 18, sectionName: "qa"}]};
*/

//Sorting the username of the members of a project in alphabetical order 
db.projects.update({"project": "P1"}, {$push: {"user.userName": {$each: [], $sort:1}}});
result = db.projects.find({"project": "P1"});
print('Result after Updating the task fields once it is completed');
while(result.hasNext()){
printjson(result.next());
}
//OUTPUT
/*
{project: "P1", projectID: 121, workspaceID: 1, user: [{userName:"Ami", userID: 12342, email:"ami@csueb.com"},
{userName:"Aneri", userID: 12341, email:"aneri@csueb.com"}, 
{userName:"Eric", userID: 56372, email: "esamsung@csueb.com", tasks: [{task_id: 90, task_name: "task3", created_on: "February 1, 2018", due_on: "March 11, 2018" }]}, 
{userName:"Jack", userID: 69078, email: "jmatthew@csueb.com", tasks: [{task_id: 98, task_name: "task1", created_on: "January 12, 2017", due_on: "January 11, 2018"}]}],
{userName:"Jay", userID: 12343, email:"jay@csueb.com", tasks: [{task_id: 90, task_name: "task7", created_on: "December 12, 2017", due_on: "January 11, 2018"}]}, 
{userName:"Jonathan", userID: 34578, email: "jsmith102@csueb.com"}, 
{userName:"Kelly", userID: 98080, email: "kwolitzer@csueb.com"},
{userName:"Maya", userID: 12345, email:"maya@csueb.com"}, 
{userName:"Raj", userID: 12344, email:"raj@csueb.com", tasks: [{task_id: 49, task_name: "task8", created_on: "January 1, 2018", due_on: "February 1, 2018"}]},
section:[{sectionID: 11, sectionName: "development"}, {sectionID: 12, sectionName: "qa"}],
};
*/

//Removing the first user from the sorted user list
db.projects.update({"project": "P1"}, {$pop: {"user": {key: -1}}});
result = db.projects.find({"project": "P1"});
print('Result after Updating the task fields once it is completed');
while(result.hasNext()){
printjson(result.next());
}
//OUTPUT
/*
{project: "P1", projectID: 121, workspaceID: 1, user: [
{userName:"Aneri", userID: 12341, email:"aneri@csueb.com"}, 
{userName:"Eric", userID: 56372, email: "esamsung@csueb.com", tasks: [{task_id: 90, task_name: "task3", created_on: "February 1, 2018", due_on: "March 11, 2018" }]}, 
{userName:"Jack", userID: 69078, email: "jmatthew@csueb.com", tasks: [{task_id: 98, task_name: "task1", created_on: "January 12, 2017", due_on: "January 11, 2018"}]}],
{userName:"Jay", userID: 12343, email:"jay@csueb.com", tasks: [{task_id: 90, task_name: "task7", created_on: "December 12, 2017", due_on: "January 11, 2018"}]}, 
{userName:"Jonathan", userID: 34578, email: "jsmith102@csueb.com"}, 
{userName:"Kelly", userID: 98080, email: "kwolitzer@csueb.com"},
{userName:"Maya", userID: 12345, email:"maya@csueb.com"}, 
{userName:"Raj", userID: 12344, email:"raj@csueb.com", tasks: [{task_id: 49, task_name: "task8", created_on: "January 1, 2018", due_on: "February 1, 2018"}]},
section:[{sectionID: 11, sectionName: "development"}, {sectionID: 12, sectionName: "qa"}],
};
*/


//Upserting sections to a project
db.projects.update({"project": "P2"}, {$setOnInsert: {"section.sectionID": "100"}}, true);
result = db.projects.find({"project": "P2"});
print('Result after Updating the task fields once it is completed');
while(result.hasNext()){
printjson(result.next());
}
//OUTPUT
/*
{project: "P2", projectID: 122, workspaceID: 2, user: [{userName:"Aneri", userID: 12341, email:"aneri@csueb.com"}, 
{userName:"Jay", userID: 12343, email:"jay@csueb.com"}, {userName:"Raj", userID: 12344, email:"raj@csueb.com"}, 
{userName:"Donald", userID: 23879, email: "dfischer@csueb.com"}, 
{userName:"Kelly", userID: 98080, email: "kwolitzer@csueb.com", tasks: [{task_id: 54, task_name: "task2", created_on: new Date("March 22, 2018"), due_on: new Date("September 11, 2018")}]}],
section:[{sectionID: 13, sectionName: "development"}, {sectionID: 14, sectionName: "qa"},{sectionID: 100}]};

*/
