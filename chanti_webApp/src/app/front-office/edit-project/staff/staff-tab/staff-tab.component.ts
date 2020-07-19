import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../../../shared/user/user.model';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-staff-tab',
  templateUrl: './staff-tab.component.html',
  styleUrls: ['./staff-tab.component.scss']
})
export class StaffTabComponent implements OnInit {
  @Input('staffList') public staffList:IUser[];
  @Input('allUsers') public allUsers:IUser[];
  @Output('onStaffListChanged') public onStaffListChanged:EventEmitter<any>=new EventEmitter();

  staffControlForm = new FormControl();
  staff: any;

  constructor() { }

  ngOnInit(): void {
  }
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
