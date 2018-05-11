//retrieve task names and their due dates of project: P4 which has some pending tasks

result=db.projects.find({project:"P4"},(user.tasks.task_name,user.tasks.due_on));
print('Result for "retrieve task names and their due dates of project: P4 which has some pending tasks"');

// Using the code from the "Write Scripts for the mongo Shell" tutorial from doc.mongodb.org
while ( result.hasNext() ) {
   printjson( result.next() );
}

 //retrieve project names which hs a particular section: QA

result=db.projects.find({sectionName:"QA"},{project});
print('Result for "retrieve project names which hs a particular section: QA"');

// Using the code from the "Write Scripts for the mongo Shell" tutorial from doc.mongodb.org
while ( result.hasNext() ) {
   printjson( result.next() );
} 

 // retrieve list of tasks of projects with under workspace 1

 result=db.projects.find({workspaceID:1},{user.tasks.task_name});
 print('Result for "retrieve list of tasks of projects with under workspace 1"');

// Using the code from the "Write Scripts for the mongo Shell" tutorial from doc.mongodb.org
while ( result.hasNext() ) {
   printjson( result.next() );
}