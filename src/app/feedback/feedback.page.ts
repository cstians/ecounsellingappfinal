import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  message='';
  mess='';

  constructor(private http:HttpClient,public navCtrl:NavController,private toastCtrl:ToastController,private router:Router) { }


  feedback(){

    if(this.message==''){
      this.Message();
    }
    else{
    let data={
      Message:this.message
    }
      
     this.http.post('http://localhost:8000/api/feedback',data).subscribe((response)=>{
       console.log(response);
       this.message='';
       this.ToastsMessage();
       this.router.navigateByUrl('/home');
      
     },error=>{
       console.log(error);
       this.errorMessage();
     });
  }
}
   async ToastsMessage(){
     const toast= await this.toastCtrl.create({
       message:"Successfully sent your feedback",
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
      message:"Empty feedback cannot be sent. Please enter your feedback",
      duration:3000,
     
    });
  return await toast.present();
  }
 
  ngOnInit() {
  }

}
