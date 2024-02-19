import { Component ,inject} from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  routes:Router=inject(Router);
  stateRelative:ActivatedRoute=inject(ActivatedRoute);
  onChange(){
    this.routes.navigate(['Contact']);
    // this.routes.navigateByUrl('Contact');
    // this.routes.navigate(['Contact'],{relativeTo:this.stateRelative});      //accessing relative with navigate()method
  }

  onLogin(){
    this.routes.navigate(['LoginPage']);
  }
  // goCourse(){
  //   this.routes.navigate(['Courses'],{
  //     queryParams:{search:'engineer'}
      
  //   })
  // }
}
