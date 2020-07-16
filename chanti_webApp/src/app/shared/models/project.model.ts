import { IUser } from '../user/user.model';
import { IMaterial } from './material.model';
import { ITask } from './task.model';

export interface IProject{
    projectname:string;
    owner:string;
    status:string;
	material:IMaterial[];
	task:ITask[];
	staff:IUser[];
    
}