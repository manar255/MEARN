import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { WomenComponent } from './components/women/women.component';
import { MenComponent } from './components/men/men.component';
import { KidsComponent } from './components/kids/kids.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[authGuard]
    },
    {
        path:'women',
        component:WomenComponent
    },
    {
        path:'men',
        component:MenComponent
    },
    {
        path:'kids',
        component:KidsComponent
    }
];
