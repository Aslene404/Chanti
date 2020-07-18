import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/shared/models/project.model';
import { UserService } from 'src/app/shared/user/user.service';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/shared/user/user.model';
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  staffForm = new FormControl();
  staff: any;

  currentProjectId: string;
  currentProject: IProject;

  taskForm: FormGroup;
  materialForm: FormGroup;

  constructor(
    private projectService: ProjectsService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.currentProjectId = this.activatedRoute.snapshot.paramMap.get('id');
    this.projectService.getProjectById(this.currentProjectId).subscribe(data => this.currentProject = data.payload);
   
    this.userService.getAllUsers()
    .pipe(
      map (response=>response.payload))
      .subscribe(data => {
        this.staff = data.map((user:IUser)=>user.fullusername);
        console.log(this.staff);
      });
    this.taskForm = this.fb.group({
      taskname: [''],
      sdate: [''],
      fdate: ['']
    });

    this.materialForm = this.fb.group({
      materialname: [''],
      quantity: [0],
      unitprice: [0]
    });

  

  }

  addMaterial(){
    console.log(this.materialForm.value);
  }


}
