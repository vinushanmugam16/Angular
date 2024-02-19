import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[UserService]
})
export class AdminComponent {
  constructor(private insertDetail:UserService){

  }
  name:string='';
  gender:string='Male';
  status:string='Inactive';

  createNew(){
    this.insertDetail.createDetail(this.name,this.gender,this.status);
    console.log(this.insertDetail.state);
  }
}
