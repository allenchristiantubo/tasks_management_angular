export interface TaskModel{
    taskId: number;
    taskName: string;
    taskDescription: string;
    taskDateCreated?: Date;
    taskDateModified?: Date;
    taskDateCompleted?: Date;
    taskStatus: string;
    tags: ITags[];
}

export interface ITags{
    tagId: number;
    tagName: string;
}