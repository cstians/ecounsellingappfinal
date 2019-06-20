import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { Events } from '@ionic/angular';


@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.page.html',
  styleUrls: ['./notification-list.page.scss'],
})
export class NotificationListPage implements OnInit {
    
  public items:Array<any>=[];
  constructor(private router:Router,private event:Events,private http:HttpClient) {
    this.getNotify();
   }

  getNotify(){
    this.http.get('http://localhost:8000/api/notifications').subscribe((data:any)=>{

    if(data!=''){
      this.items=data;
      window.localStorage.setItem('notifyMessage','notEmpty');
    }
     });
  }

  findNotice(item){
   window.localStorage.setItem('mtitle',''+item.title);

    this.router.navigateByUrl('/notification-details');

  }


  
  remove(item){
    for(var i=0;i<this.items.length;i++){
      if(this.items[i]==item){
       this.items.splice(i,1); 
      }
    }

  }
 

  ngOnInit() {
  }

}
