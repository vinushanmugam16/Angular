import { Component } from '@angular/core';
import { SubscribeService } from '../service/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  onSubscribe(){
    let state=new SubscribeService();
    state.onSubscribing('Our Website');
  }
}
         