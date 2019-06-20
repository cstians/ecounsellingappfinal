import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
''

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.page.html',
  styleUrls: ['./motivation.page.scss'],
})
export class MotivationPage implements OnInit {

  items=[];
  url:string;

  constructor(private http:HttpClient,private browser:InAppBrowser) { 
    this.getlink();
  }

  getlink(){

    this.http.get('http://localhost:8000/api/getlink').subscribe((data:any)=>{
      this.items=data;
    });

  }

  openBrowser(URL:string){

    const browser=this.browser.create(URL,'_system',null);
  }

  ngOnInit() {
  }

}
