import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';

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
        children:[
            {
                path:'',
                component:ProductsComponent
            },
            {
                path:'categories',
                component:CategoriesComponent

            }
        ]

    }
];
