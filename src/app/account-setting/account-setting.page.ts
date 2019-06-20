import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.page.html',
  styleUrls: ['./account-setting.page.scss'],
})
export class AccountSettingPage implements OnInit {

  old_password:string;
  new_password:string;
  cpassword:string;
  test:string;


  constructor(private popCtrl:PopoverController,private http:HttpClient, private toastCtrl:ToastController,private router:Router) { }

  changePassword(){

    var authUser=window.localStorage.getItem('name');
    
    
  

    let data={
      "old_password":''+this.old_password,
      "new_password":''+this.new_password,
      "confirm_password":''+this.cpassword,
      "authUser":''+authUser
    }

    this.http.post('http://localhost:8000/api/changePassword',data).subscribe((response)=>{

      if(response=='Success'){
        this.successToast();
        this.popCtrl.dismiss();
      
     
      }
      else{
       this.failToast();
      }
    },error=>{
      console.log(error);
      this.errorMessage();
    }) ;
  }

  closePopover(){
    this.popCtrl.dismiss();
  }


  async successToast(){
    const toast= await this.toastCtrl.create({
      message:"Successfully changed your password",
      duration:3000,
     
    });
  return await toast.present();
}

async failToast(){

  const toast= await this.toastCtrl.create({
    message:"Failed to change your password",
    duration:3000,
   
  });
return await toast.present();

}

async errorMessage(){
    
  const toast= await this.toastCtrl.create({
    message:"Could not connect to server.Try after a while",
    duration:3000,
   
  });
return await toast.present();
}

  ngOnInit() {
  }

}
