import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../dependency/Model/task';
import { map } from 'rxjs';

@Component({
  selector: 'app-verbspage',
  templateUrl: './verbspage.component.html',
  styleUrls: ['./verbspage.component.css']
})
export class VerbspageComponent implements OnInit {



http:HttpClient=inject(HttpClient)
allDetails:Task[]=[];
id: string;
ngOnInit(){
  this.fetchData();
}

createTask(data:Task){
    const head=new HttpHeaders({'my-header':'Hello World'})
    // console.log(data);
    this.http.post<{name:string}>('https://angularhttpclient-394e7-default-rtdb.firebaseio.com//tasks.json',data ,
    {headers:head})
    .subscribe((response)=>{
      console.log(response);
    });
}

  fetchData(){
  this.http.get('https://angularhttpclient-394e7-default-rtdb.firebaseio.com/tasks.json')
  .pipe(map((response)=>{
    let state=[];

    for(let item in response){
      if(response.hasOwnProperty(item)){
        state.push({...response[item],id:item});
      }
    }
    return state;
  }))
  .subscribe((state)=>{
    this.allDetails=state
    // console.log(state);
  })
}

deleteDetail(id:string | undefined){
  this.http.delete('https://angularhttpclient-394e7-default-rtdb.firebaseio.com/tasks/' +id+ '.json ')
  .subscribe((res)=>{
    console.log(res)
  })
}
clearAll() {
  this.http.delete('https://angularhttpclient-394e7-default-rtdb.firebaseio.com/tasks.json')
  .subscribe((res)=>{
    console.log(res);
  })
  }
  
  fetchDetail(){
    this.fetchData();
  }

  onEdit(){
    // this.allDetails.find
    const name={firstname:'Elisa', lastname:'John'};
    this.http.put('https://angularhttpclient-394e7-default-rtdb.firebaseio.com/tasks.json',name)
    .subscribe(()=>this.allDetails.push(name));
  }



}
