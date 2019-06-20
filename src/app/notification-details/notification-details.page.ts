import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.page.html',
  styleUrls: ['./notification-details.page.scss'],
})
export class NotificationDetailsPage implements OnInit {

  title:string;
  public items=[];

  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient) { 
  
    
  
    this.getDetail();
  }

  getDetail(){
    var title=window.localStorage.getItem('mtitle');

    let data={
      "title":title
    }

    this.http.post('http://localhost:8000/api/getNotifyDetail',data).subscribe((data:any)=>{
      this.items=data;
    })

  }
  

  ngOnInit() {
  }

}
