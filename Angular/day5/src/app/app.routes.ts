import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { AboutComponent } from '../Components/about/about.component';
import { ContactUsComponent } from '../Components/contact-us/contact-us.component';
import { ProductComponent } from '../Components/product/product.component';
import { NotFoundComponent } from '../Components/not-found/not-found.component';
import { MainComponent } from '../Components/main/main.component';
import { ProductDetailsComponent } from '../Components/product-details/product-details.component';

export const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:'about',
        component:AboutComponent,
        title:'about'
    },
    {
        path:'contact',
        component:ContactUsComponent,
        title:'Contact Us'
    },
    {
        path:'main',
        component:MainComponent,
        title:'Main',
      
    },
    {path:'product/:id',component:ProductDetailsComponent},

    {
        path:'**',
        component:NotFoundComponent,
        title:'Home'
    }
];
