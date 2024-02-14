import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/service/subscribe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  onSubscribe(){
    let state2=new SubscribeService;
    state2.onSubscribing('Keep in Touch');
  }
}
