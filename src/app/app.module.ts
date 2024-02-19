import {  NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { BindingComponent } from './binding/binding.component';
import { HooksComponent } from './hooks/hooks.component';
import { PipesComponent } from './pipes/pipes.component';
import { PracticeComponent } from './practice/practice.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { DependencyComponent } from './dependency/dependency.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { SidebarComponent } from './header/home/sidebar/sidebar.component';
import { MainComponent } from './dependency/main/main.component';
import { FooterComponent } from './dependency/footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ShadowComponent } from './view-encapsulation/shadow/shadow.component';
import { NoneComponent } from './view-encapsulation/none/none.component';
import { EmulatedComponent } from './view-encapsulation/emulated/emulated.component';
import { MethodComponent } from './method/method.component';
import { CustompipePipe } from './custompipe.pipe';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './dependency/main/side-bar/side-bar.component';
import { SourceService } from './dependency/service/source.service';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './dependency/admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursedetailComponent } from './courses/coursedetail/coursedetail.component';
import { PricesComponent } from './courses/prices/prices.component';
import { LoginpageComponent } from './loginpage/loginpage.component';



// const routes:Routes=[

//     {path:'',component:HomepageComponent},
//     {path:'Homepage',component:HomepageComponent},
//     {path: 'Page' ,component:PageComponent},
//     {path:'About',component:AboutComponent},
//     {path:'Contact',component:ContactComponent},
//     {path:'**',component:NotFoundComponent}
// ]


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    BindingComponent,
    HooksComponent,
    PipesComponent,
    PracticeComponent,
    ViewEncapsulationComponent,
    ParentComponent,
    ChildComponent,
    DependencyComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    ContentComponent,
    ShadowComponent,
    NoneComponent,
    EmulatedComponent,
    MethodComponent,
    CustompipePipe,
    SideBarComponent,
    PageComponent,
    AboutComponent,
    ContactComponent,
    HomepageComponent,
    NotFoundComponent,
    AdminComponent,
    CoursesComponent,
    CoursedetailComponent,
    PricesComponent,
    LoginpageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(routes),
  
  ],
  providers: [SourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
