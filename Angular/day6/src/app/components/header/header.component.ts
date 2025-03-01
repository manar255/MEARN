import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isBasic:boolean=false;
  isAdmin:boolean=false;
  constructor(private router: Router,private authService:AuthenticationService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isBasic = (event.url == '/login' || event.url == '/register');
      }
    });
    this.authService.isAdminBS.subscribe(data=>{
      this.isAdmin=data;
    })
  }
}
