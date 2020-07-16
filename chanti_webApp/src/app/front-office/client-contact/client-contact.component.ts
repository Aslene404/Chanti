import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/user/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IApiResponse } from 'src/app/shared/models/api-response.model';
import { ContactsService } from '../contact.service';

@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.scss']
})
export class ClientContactComponent implements OnInit {
  contactForm: FormGroup;
  currentUser: IUser;
  existUser: IUser;

  constructor(private fb: FormBuilder,
    private contactsService: ContactsService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.existUser = getcurrentUser();
    if (!this.existUser) {

      this.contactForm = this.fb.group(
        {
          fullname: ['', Validators.required],
          email: ['', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ])],
          phone: ['', Validators.compose([
            Validators.required,
            Validators.pattern('[0-9]+|0-9]+[0-9]+[0-9]+[0-9]')
          ])],
          city: ['', Validators.required],
          opinion: ['', Validators.required]

        });
    } else {
      this.contactForm = this.fb.group(
        {
          fullname: [this.existUser.fullusername, Validators.required],
          email: [this.existUser.email, Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ])],
          phone: [this.existUser.phone, Validators.compose([
            Validators.required,
            Validators.pattern('[0-9]+|0-9]+[0-9]+[0-9]+[0-9]')
          ])],

          /*
          phone: ['', Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]+|0-9]+[0-9]+[0-9]+[0-9]')
        ])],
          
          */
          city: [this.existUser.city, Validators.required],
          opinion: ['', Validators.required]

        });
    }

  }
  send() {

    this.contactsService.addContact(this.contactForm.value).subscribe({
      next: (response: IApiResponse) => {
        this.snackBar.open(response.message, 'Close');
      },
      error: (error) => this.snackBar.open(error.message, 'Close'),
      complete: () =>  this.contactForm.reset()
    });



  }
}
  function getcurrentUser(): IUser {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

