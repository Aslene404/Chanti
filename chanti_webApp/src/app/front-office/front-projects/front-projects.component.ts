import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/user/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-front-projects',
  templateUrl: './front-projects.component.html',
  styleUrls: ['./front-projects.component.scss']
})
export class FrontProjectsComponent implements OnInit {
  addProjectForm: FormGroup;
  currentUser: IUser;
  existUser: IUser;
  constructor(private fb: FormBuilder,
    private projectsService: ProjectsService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.existUser = getcurrentUser();
    this.addProjectForm =this.fb.group(
    {projectname: ['', Validators.required],
    owner: [this.existUser.fullusername, Validators.required],
    status: ['', Validators.required]
    });
  }
  send() {

    this.projectsService.addProject(this.addProjectForm.value).subscribe({
      next: (response: IApiResponse) => {
        this.snackBar.open(response.message, 'Close');
      },
      error: (error) => this.snackBar.open(error.message, 'Close'),
      complete: () =>  this.addProjectForm.reset()
    });



  }

}
function getcurrentUser(): IUser {
  return JSON.parse(localStorage.getItem('currentUser'));
}
