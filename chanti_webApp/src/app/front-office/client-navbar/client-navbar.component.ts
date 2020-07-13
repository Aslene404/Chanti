import { Component, OnInit } from '@angular/core';
import { IUser } from '../iuser';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.scss']
})
export class ClientNavbarComponent implements OnInit {

  currentUser: IUser;
  constructor(private router:Router,private authenticationService:AuthenticationService) { 
    this.authenticationService.currentUser.subscribe(tmpUser=>this.currentUser=tmpUser);
  }

  ngOnInit(): void {
    this.currentUser= JSON.parse(localStorage.getItem('currentUser'));
  }
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/front/login']);
  }

}
