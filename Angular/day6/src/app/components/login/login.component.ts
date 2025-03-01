import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  fb = inject(NonNullableFormBuilder);
  loginData = this.fb.group({
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    password: this.fb.control('', { validators: [Validators.required] }),
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  login() {
    if (this.loginData.invalid) {
      this.loginData.markAllAsTouched();
    }
    let loginValues = this.loginData.getRawValue();
    this.authenticationService
      .login(loginValues)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status == 201) {
          let { token, role } = res.body;
          localStorage.setItem('token', token);
          localStorage.setItem('role',role)
          this.authenticationService.isAdminBS.next(role=='admin')
          this.router.navigate(['/']);
        } else {
          alert('error in login');
        }
      });
  }
}
