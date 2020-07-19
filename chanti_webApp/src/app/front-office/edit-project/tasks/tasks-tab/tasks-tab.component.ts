import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../../../shared/models/task.model';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-tasks-tab',
  templateUrl: './tasks-tab.component.html',
  styleUrls: ['./tasks-tab.component.scss']
})
export class TasksTabComponent implements OnInit {
  @Input('taskList') public taskList:ITask[];
  @Output('onTaskListChanged') public onTaskListChanged:EventEmitter<any>=new EventEmitter();

  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      taskname: [''],
      sdate: [''],
      fdate: ['']
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
