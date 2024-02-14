import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/service/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  onSubscribe(){
    let state3=new SubscribeService();
    state3.onSubscribing('We will update you daily');
  }

}
