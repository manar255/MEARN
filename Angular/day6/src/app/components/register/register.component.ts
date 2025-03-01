import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IUser } from '../../models/iuser';
import { AuthenticationService } from '../../services/authentication.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule,JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnChanges{
fb=inject(NonNullableFormBuilder);
  userData = this.fb.group({
    firstName: this.fb.control("",{validators:[Validators.required,Validators.minLength(5)]}),
    lastName: this.fb.control("",{validators:[Validators.required,Validators.minLength(5)]}),
    gender: this.fb.control("",{validators:[Validators.required]}),
    email: this.fb.control("",{validators:[Validators.required,Validators.email]}),
    phone: this.fb.control("",{validators:[Validators.required,Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]}),
    password: this.fb.control("", {
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]
    }),
  });

  constructor(private authService: AuthenticationService,private router:Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.userData.controls.firstName.errors);
    
  }
  register() {
    if (this.userData.invalid) {
      this.userData.markAllAsTouched();
      return;
    }

    console.log(this.userData.value);
    let user: IUser = { ...this.userData.getRawValue() };

    this.authService.register(user).subscribe((response: string) => {
      console.log(response);
    });
    this.router.navigate(['./login']);
  }
}
