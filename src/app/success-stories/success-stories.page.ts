import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.page.html',
  styleUrls: ['./success-stories.page.scss'],
})
export class SuccessStoriesPage implements OnInit {

  stories:string;
  public items:Array<any>=[];

  public storylist=[];

  constructor(private router:Router,private http:HttpClient,private toastCtrl:ToastController) { }

  sendStories(){

    if(this.stories==''){
      this.Message();
    }

    else{
    let data={
      "stories":this.stories
    }

    this.http.post('http://localhost:8000/api/postStories',data).subscribe((response)=>{
      if(response['message']=='sucessful'){
         this.successMessage();
      }
      else {
        this.failMessage();
      }
    },error=>{
      console.log(error);
      this.errorMessage();

    });
    this.stories='';
  }
}
  async successMessage(){
    const toast= await this.toastCtrl.create({
      message:"Submitted successfully",
      duration:3000,
     
    });
  return await toast.present();


  }

  async failMessage(){
    const toast= await this.toastCtrl.create({
      message:"Failed to submit your story",
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
      message:"Please write success story you want to share",
      duration:3000,
     
    });
  return await toast.present();
  }

  public getStories(){
    this.http.get('http://localhost:8000/api/getStories').subscribe((data:any)=>{
      this.storylist=data;

    },error=>{
      console.log(error);
    });
    
  }


  ngOnInit() {
  }

}
