import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-peer-view-questions',
  templateUrl: './peer-view-questions.page.html',
  styleUrls: ['./peer-view-questions.page.scss'],
})
export class PeerViewQuestionsPage implements OnInit {

  items=[];

  constructor(private http:HttpClient) { 

    this.getQuery();

  }

  getQuery(){
    this.http.get('http://localhost:8000/api/peerviewquery').subscribe((data:any)=>{
     this.items=data;
    });
  }



  ngOnInit() {
  }

}
