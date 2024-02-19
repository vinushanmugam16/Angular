import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursedetailComponent } from './courses/coursedetail/coursedetail.component';
import { PricesComponent } from './courses/prices/prices.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


const routes:Routes=[
  // { path: '',   redirectTo: 'HomepageComponent', pathMatch: 'full' },
  {path:'',component:HomepageComponent},
  {path:'Homepage',component:HomepageComponent},
  {path: 'Page' ,title:'Page'  ,component:PageComponent},
  {path:'About',title:'About',component:AboutComponent},
  {path:'Contact',title:'Contact',component:ContactComponent},
  {path:'Courses',title:'Courses',component:CoursesComponent},
  {path:'Courses',children:[
  { path:'CourseDetail',component:CoursedetailComponent},
  {path:'Prices',component:PricesComponent, canActivate:[()=>{return true;} ]}
]},
  {path:'LoginPage',component:LoginpageComponent},
  {path:'**',title:'Page Not Found',component:NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
