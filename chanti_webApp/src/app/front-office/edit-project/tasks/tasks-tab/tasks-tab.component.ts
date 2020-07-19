import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../../../shared/models/task.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TaskService } from '../../../task.service';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-tasks-tab',
  templateUrl: './tasks-tab.component.html',
  styleUrls: ['./tasks-tab.component.scss']
})
export class TasksTabComponent implements OnInit {
  @Input('taskList') public taskList:ITask[];
  @Input('projectId') public projectId:string;
  @Output() public onTaskListChanged:EventEmitter<boolean> = new EventEmitter(false);

  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService:TaskService,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      taskname: [''],
      sdate: [new Date()],
      fdate: [new Date()]
    });
  }

  addTask(){
    console.log(this.taskForm.value);
    this.taskService.addNewTask(this.projectId, this.taskForm.value).subscribe(
      {
        next: (response: IApiResponse) => {
          this.snackBar.open(response.message, '', { duration: 5000 });
        },
        error: error => {
          this.snackBar.open(error.message, 'Close')
        },
        complete: () =>{ this.onTaskListChanged.emit(true);}

      });
  }

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

}
