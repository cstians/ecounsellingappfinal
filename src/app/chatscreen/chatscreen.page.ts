import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, PopoverController } from '@ionic/angular';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportPage } from '../report/report.page';

@Component({
  selector: 'app-chatscreen',
  templateUrl: './chatscreen.page.html',
  styleUrls: ['./chatscreen.page.scss'],
})
export class ChatscreenPage implements OnInit {

  socket:any;
  name:string;
  authName:string;
  username:string='';
  sender:string='';
  userType:string;
  hideWarning:string;
  try:string;


  constructor(public navCtrl: NavController, 
    public toastCtrl:ToastController,
    private route:ActivatedRoute,
    private router:Router,
    private popCtrl:PopoverController) { 

      var name=window.localStorage.getItem('display_name');
    
      this.username=''+name.substring(0,7);

var userType=window.localStorage.getItem('usertype');

if(userType=='Peer'){
 this.hideWarning='hide';
  }
}


async report(){
const popover=await this.popCtrl.create({
  component:ReportPage
});
popover.present();
}





  
    

 
  
    


  ngOnInit() {
  }

}
