import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PeerIdentityPage } from '../peer-identity/peer-identity.page';
import { UserinfoPage } from '../userinfo/userinfo.page';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user_name:string="";
  user_password:string="";
  user_cpassword:string="";
  gender:string="";
  qualification:string="";
  designation:string="";
 

  constructor(private navCtrl:NavController,private router:Router,private route:ActivatedRoute,private http:HttpClient,private toastCtrl:ToastController,private popCtrl:PopoverController) { 
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.designation=this.router.getCurrentNavigation().extras.state.designation;
        
    }
   
    });
  }


  async popup(){

    if(this.user_name==""){
      const toast= await this.toastCtrl.create({
        message:"User name field is empty",
        duration:3000,
       
      });
    return await toast.present();
      
    }

    else if(this.user_password=="") {

      const toast= await this.toastCtrl.create({
        message:"Password field is empty",
        duration:3000,
       
      });
    return await toast.present();

    }

    else if(this.user_cpassword==""){

      const toast= await this.toastCtrl.create({
        message:"Confirm password field is empty",
        duration:3000,
       
      });
    return await toast.present();
    }

    else if(this.qualification==""){

      const toast= await this.toastCtrl.create({
        message:"Qualification field is empty",
        duration:3000,
       
      });
    return await toast.present();
    }

    else if(this.user_cpassword!=this.user_password){
  
      const toast= await this.toastCtrl.create({
        message:"password did not match",
        duration:3000
       
      });
    return await toast.present();
  
    }


    else{

      if(this.designation=='User'){
      let postData  = {
        "name": this.user_name,
        "email": this.user_cpassword,
        "password":this.user_password,
        "gender":this.gender,
        "qualification":this.qualification,
        "designation":this.designation
    
      }

      this.http.post('http://localhost:8000/api/signup', postData).subscribe((response) => {
        console.log(response);
        if(response['message']=='scu'){
          window.localStorage.setItem('displayName',''+response['display_name']);
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
    }

    else if(this.designation=='Peer'){

      window.localStorage.setItem('username',this.user_name);
      window.localStorage.setItem('email',this.user_cpassword);
      window.localStorage.setItem('password',this.user_password);
      window.localStorage.setItem('gender',this.gender);
      window.localStorage.setItem('qualification',this.qualification);
      window.localStorage.setItem('designation',this.designation);

      const popover=await this.popCtrl.create({
        component:PeerIdentityPage,
        componentProps:{
          message:'nothing'
        }
      });
      popover.present();
       }
    
    }

  }

  value:number;

 
  
   
  register_Home(){
    this.router.navigateByUrl('/login');
  }


  async errorMessage(){
    const toast= await this.toastCtrl.create({
      message:"Could not connect to server.Try after a while",
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

  async successMessage(){
    const toast= await this.toastCtrl.create({
      message:"Registered successfully",
      duration:3000,
     
    });
  return await toast.present();
  }


  async toastMessage(){
    const toast= await this.toastCtrl.create({
      message:"Usser Already Exist",
      duration:3000,
    });
  return await toast.present();
  }

  ngOnInit() {
  }

}
