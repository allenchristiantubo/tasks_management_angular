export const tasks = [
    { taskId:1, taskName: "Learn C#", taskDescription: "Start Learning C#", taskDateCreated: new Date("2022-05-30"), taskDateModified : new Date("2022-05-30"),  taskStatus: "In Progress",
        tags:[
            {tagId:1, tagName: "Web Development C#"}
        ]
    },
    {taskId:2, taskName: "Learn ASP", taskDescription: "Start Learning ASP.Net", taskDateCreated: new Date("2022-05-30"), taskDateModified : new Date("2022-05-31"),  taskStatus: "New",
        tags:[
        {tagId:2, tagName: "Web Development ASP"}
        ]
    },
    {taskId:3, taskName: "Code Review on Sorting", taskDescription: "View codes on sorting",taskDateCreated: new Date("2022-05-20"), taskDateModified : new Date("2022-05-30"), taskDateCompleted: new Date("2022-05-31"), taskStatus: "Completed",
        tags:[
            {tagId:3, tagName: "Code Review"}
        ]
    },
    {taskId:4, taskName: "Angular Design",  taskDescription: "Create landing and login page",taskDateCreated: new Date("2022-05-30"), taskDateModified: new Date("2022-05-30"), taskDateCompleted: new Date("2022-05-31"),taskStatus: "Completed",
        tags:[
            {tagId:4, tagName: "Web Design"}
        ]
    }
];