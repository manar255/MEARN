import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IUser } from '../../models/iuser';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  userData = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    password: new FormControl(),
  });

  constructor(private authService: AuthenticationService) {}
  register() {
    console.log(this.userData.value);
    let user: IUser = {
      firstName: this.userData.value.firstName,
      lastName: this.userData.value.lastName,
      gender: this.userData.value.gender,
      email: this.userData.value.email,
      phone: this.userData.value.phone,
      password: this.userData.value.password
    };
    this.authService.register(user).subscribe((response: string) => {
      console.log(response);
    });
  }
}
