import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from 'src/app/shared/user/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { ProjectsService } from '../projects.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProject } from 'src/app/shared/models/project.model';


@Component({
  selector: 'app-front-projects',
  templateUrl: './front-projects.component.html',
  styleUrls: ['./front-projects.component.scss']
})
export class FrontProjectsComponent implements OnInit {
  displayedColumns: string[] = [
    'projectname', 'status', 'edit','delete'
  ];

  private projectSubscribtion;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataSource: MatTableDataSource<IProject>;
  projects:IProject[];

  addProjectForm: FormGroup;

  currentUser: IUser;

  existUser: IUser;

  constructor(private fb: FormBuilder,
    private projectsService: ProjectsService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.existUser = getcurrentUser();
    this.addProjectForm = this.fb.group(
      {
        projectname: ['', Validators.required],
        status: ['', Validators.required]
      });
      this.getAllProjects();
  }


  send() {
    let project={
      projectname:this.addProjectForm.value.projectname,
      owner:getcurrentUser()._id,
      status:this.addProjectForm.value.status
    }
    this.projectsService.addProject(project).subscribe({
      next: (response: IApiResponse) => {
        this.snackBar.open(response.message, 'Close');
      },
      error: (error) => this.snackBar.open(error.message, 'Close'),
      complete: () => this.addProjectForm.reset()
    });



  }
  getAllProjects() {
    let userId=getcurrentUser()._id;
    this.projectSubscribtion = this.projectsService.getUserProjects(userId)
      .subscribe(
        {
          next: (response: IApiResponse) => {
            this.projects = response.payload;
            this.dataSource = new MatTableDataSource(this.projects);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.snackBar.open(response.message,'',{duration:5000})
          },
          
          error: error => {
            this.snackBar.open(error.message, 'Close');
          },
          complete: () => console.log
        });
  }

  deleteProject(id) {
    this.projectsService.deleteproject(id).subscribe({
      next: (response: IApiResponse) => {
        this.projects = response.payload;
      },
      error: error => {
        this.snackBar.open(error.message, 'Close');
      },
      complete: () => {
        this.getAllProjects();
      }
    }
    );
  }
  
  applyFilter(filterValue: string) {
    // console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.projects)
  }
  ngOnDestroy(): void {
    this.projectSubscribtion.unsubscribe();
  }

  markCompleted(id){
    console.log('Completed',id);
  }
  

}

function getcurrentUser(): IUser {
  return JSON.parse(localStorage.getItem('currentUser'));
}


