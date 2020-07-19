
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/shared/models/project.model';
import { UserService } from 'src/app/shared/user/user.service';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/shared/user/user.model';
import { ITask } from '../../shared/models/task.model';
import { IMaterial } from '../../shared/models/material.model';
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  currentProjectId: string;
  currentProject: IProject;
  users:IUser[];
  constructor(
    private projectService: ProjectsService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
   ) { }

   ngOnInit(): void {
     this.refreshProject(true);
    }

    refreshProject(event){
      console.log(JSON.stringify(event));
      this.currentProjectId = this.activatedRoute.snapshot.paramMap.get('id');
      this.projectService.getProjectById(this.currentProjectId).subscribe(data => {
        this.currentProject = data.payload;
      });

      this.userService.getAllUsers()
      .pipe(
        map (response=>response.payload))
        .subscribe(data => {
          this.users = data.map((user:IUser)=>{
            let u:{id:string,username:string}={id:null,username:null};
            u.id=user._id;
            u.username=user.fullusername;
           return u;
          });
        });
      }

    }
