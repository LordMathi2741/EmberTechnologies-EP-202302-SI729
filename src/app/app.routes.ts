import { Routes } from '@angular/router';
import {TheHomePageComponent} from "./public/pages/the-home-page/the-home-page.component";
import {TheNotfoundPageComponent} from "./public/pages/the-notfound-page/the-notfound-page.component";
import {TheBundlePageComponent} from "./bundles/pages/the-bundle-page/the-bundle-page.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:TheHomePageComponent},
  {path:'', redirectTo:'/store', pathMatch:'full'},
  {path:'store/bundles', component: TheBundlePageComponent},
  {path:'**', component:TheNotfoundPageComponent}
];
