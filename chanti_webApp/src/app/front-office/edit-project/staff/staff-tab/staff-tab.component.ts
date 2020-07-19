import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../../../shared/user/user.model';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { UpdateStaffService } from 'src/app/front-office/update-staff.service';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-staff-tab',
  templateUrl: './staff-tab.component.html',
  styleUrls: ['./staff-tab.component.scss']
})
export class StaffTabComponent implements OnInit {
  @Input('staffList') public staffList: IUser[];
  @Input('allUsers') public allUsers: IUser[];
  @Input('projectId') public projectId: string;

  @Output() public onStaffListChanged: EventEmitter<boolean> = new EventEmitter(false);

  staffForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private staffService: UpdateStaffService,
    private snackBar: MatSnackBar) {
    this.staffForm = this.fb.group({
      id: [''],
      username: ['']
    }
    )

  }

  ngOnInit(): void {

  }


  updateProjectStaff() {
    this.staffService.updateProjectStaff(this.projectId, this.staffForm.value.id).subscribe(
      {
        next: (response: IApiResponse) => {
          this.snackBar.open(response.message, '', { duration: 5000 });
        },
        error: error => {
          this.snackBar.open(error.message, 'Close')
        },
        complete: () => { this.onStaffListChanged.emit(true); }

      });
    //console.log(this.staffForm.value.id);
  }


  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
