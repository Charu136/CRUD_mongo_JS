
//Updating the task fields once it is completed - Removing Due on and adding completed status
db.projects.update({projectID:124,"user.tasks.task_id": 23},
                {$set: {"user.tasks.$.completed_on": new Date("January 6, 2018 13:06")}},{upsert: true});
db.projects.update({projectID:124,"user.tasks.task_id": 23}, { $unset: {"user.tasks.$[].due_on": ""}});
result = db.projects.find({projectID:124});
print('Result after Updating the task fields once it is completed');
while(result.hasNext()){
printjson(result.next());
}

//Sorting the username of the members of a project in alphabetical order 
db.projects.update({"project": "P1"}, {$push: {"user.userName": {$each: [], $sort:1}}});
result = db.projects.find({"project": "P1"});
print('Result after Updating the task fields once it is completed');
while(result.hasNext()){
printjson(result.next());
}

//Removing the first user from the sorted user list
db.projects.update({"project": "P1"}, {$pop: {"user": {key: -1}}});
result = db.projects.find({"project": "P1"});
print('Result after Updating the task fields once it is completed');
while(result.hasNext()){
printjson(result.next());
}


//Upserting sections to a project
db.projects.update({"project": "P2"}, {$setOnInsert: {"section.sectionID": "100"}}, true);
result = db.projects.find({"project": "P2"});
print('Result after Updating the task fields once it is completed');
while(result.hasNext()){
printjson(result.next());
}
