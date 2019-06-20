import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http"
import { ToastController, PopoverController } from '@ionic/angular';
import { UserinfoPage } from '../userinfo/userinfo.page';

@Component({
  selector: 'app-peer-identity',
  templateUrl: './peer-identity.page.html',
  styleUrls: ['./peer-identity.page.scss'],
})
export class PeerIdentityPage implements OnInit {

  peerIdentity:string='';
  identityCardNumber:string='';
  email_id:string='';

  username:string;
  email:string='';
  password:string='';
  gender:string='';
  qualification:string='';
  designation:string='';

  constructor(private router:Router,
    private http:HttpClient,
    private toastCtrl:ToastController,
    private popCtrl:PopoverController) { }

    submitDetail(){
      var username=window.localStorage.getItem('username');
      var email=window.localStorage.getItem('email');
      var password=window.localStorage.getItem('password');
      var gender=window.localStorage.getItem('gender');
      var qualification=window.localStorage.getItem('qualification');
      var designation=window.localStorage.getItem('designation');

      if(this.peerIdentity=='' && this.email_id=='' && this.identityCardNumber==''){
        this.Message();
      }

      else{
     let postData={
         "name":username,
         "email":email,
         "password":password,
         "gender":gender,
         "qualification":qualification,
         "designation":designation,
         "peerIdentity":this.peerIdentity,
         "email_id":this.email_id,
         "identityCardNumber":this.identityCardNumber
       }
   
       
       this.http.post('http://localhost:8000/api/signup', postData).subscribe((response) => {
         console.log(response);
   
         if(response['message']=='scu'){
           this.successMessage();
           this.userInfo();
           }
           else if(response['message']=='uae'){
             this.toastMessage();
           }
        
        
       }, error => {
         console.log(error);
         this.errorMessage();
       });
        
       this.popCtrl.dismiss();
   
     }
  }

     async toastMessage(){
       const toast= await this.toastCtrl.create({
         message:"Usser Already Exist",
         duration:3000,
       });
     return await toast.present();
     }


   
     async successMessage(){
       const toast= await this.toastCtrl.create({
         message:"Registered successfully",
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

    async Message(){
      const toast= await this.toastCtrl.create({
        message:"Field cannot be empty. Please fill up carefully",
        duration:3000,
       
      });
    return await toast.present();
    }

    async userInfo(){
      const popover= await this.popCtrl.create({
        component: UserinfoPage,
        componentProps:{
        }
      });
      popover.present();
    }
    
  ngOnInit() {
  }

}
