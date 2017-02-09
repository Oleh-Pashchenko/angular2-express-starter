import { DatabaseModule } from '../index';
import { Schema, Document, Model } from "mongoose";

export interface ITask extends Document {
    title: string;
    create: Date;
}

export interface ITaskModel {
    getTask(id: string): Promise<ITask>
    addTask(task: ITask): Promise<ITask>
}

const schema = new Schema({
    title: String,
    create: {
        type: Date,
        "default": Date.now
    }
});

schema.static("getTask", (id: string) => {

    return Task
        .findOne({ _id: id })
        .lean()
        .exec();
});


schema.static("addTask", (task: ITask) => {

    return Task
        .create(task);
});

export type TaskModel = Model<ITask> & ITaskModel;

export const Task: TaskModel = <TaskModel>DatabaseModule.MongoDB.mongoose.model<ITask>("Task", schema);