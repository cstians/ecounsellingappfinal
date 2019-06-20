import { Component, OnInit } from '@angular/core';
import { NavController, ToastController} from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user_name: string;
  user_password: string;
  usertype:string='';

  passwordType:string='password';
  passwordShown:boolean=false;

  constructor(public navCtrl:NavController,public toastCtrl:ToastController,private router: Router,private http: HttpClient) { }
   

  logIn() {

    if(this.user_name==''|| this.user_password==''){
      this.Message();
    }
    else{
    let postData = {
            "email": this.user_name,
            "password": this.user_password
    }

    this.http.post('http://localhost:8000/api/login', postData).subscribe((response) => {
     
      var userType=JSON.stringify(response['userType']);
      var type=JSON.parse(userType);

      var user=JSON.stringify(response['authUser']);
      var authUser=JSON.parse(user);

      window.localStorage.setItem('usertype',type);
      window.localStorage.setItem('name',authUser);

      let navigationExtras:NavigationExtras={
       state:{
         authUser:authUser
       }
      }
      this.router.navigate(['home'],navigationExtras);

     }, error => {
      console.log(error);
      this.errorMessage();
    });
    
  }
}

  register() {
    this.navCtrl.navigateForward('/register');
  }

  public togglePassword(){
      if(this.passwordShown){  
         this.passwordShown=false;
         this.passwordType='password';
      }
      else{
          this.passwordShown=true;
          this.passwordType='text';
      }
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
      message:"Username and Password field con not be empty",
      duration:3000,
     
    });
  return await toast.present();
  }

  ngOnInit() {
  }

}
