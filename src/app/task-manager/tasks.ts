export const tasks = [
    { taskId:1, taskName: "Learn C#", taskDescription: "Start Learning C#", taskDateCreated: new Date("2022-05-30"), taskDateModified : new Date("2022-05-30"),  taskDateCompleted: null, taskStatus: "In Progress",
        tags:[
            {tagId:1, tagName: "Programming"},
        ]
    },
    {taskId:2, taskName: "Learn ASP", taskDescription: "Start Learning ASP.Net", taskDateCreated: new Date("2022-05-30"), taskDateModified : new Date("2022-05-31") ,  taskDateCompleted: null, taskStatus: "New",
        tags:[
        {tagId:1, tagName: "Programming"},
        ]
    },
    {taskId:3, taskName: "Code Review on Sorting", taskDescription: "View codes on sorting",taskDateCreated: new Date("2022-05-20"), taskDateModified : new Date("2022-05-30"), taskDateCompleted: new Date("2022-05-31"), taskStatus: "Completed",
        tags:[
            {tagId:1, tagName: "Code Review"}
        ]
    },
    {taskId:4, taskName: "Angular Design",  taskDescription: "Create landing and login page",taskDateCreated: new Date("2022-05-30"), taskDateModified: new Date("2022-05-30"), taskDateCompleted: new Date("2022-05-31"),taskStatus: "Completed",
        tags:[
            {tagId:1, tagName: "Design"}
        ]
    },
    {taskId:5, taskName: "Learn Bootstrap",  taskDescription: "Start Learning Bootstrap",taskDateCreated: new Date("2022-05-30"), taskDateModified: new Date("2022-05-30"), taskDateCompleted: null,taskStatus: "In Progress",
        tags:[
            {tagId:1, tagName: "Design"}
        ]
    }
];