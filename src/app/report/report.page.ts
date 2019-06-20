import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {


  constructor(private popCtrl:PopoverController,private http:HttpClient,private toastCtrl:ToastController) { }

  report(){
    var chatuser=window.localStorage.getItem('display_name');

    let data={
      "chatuser":''+chatuser
    }

    this.http.post('http://localhost:8000/api/reportUser',data).subscribe((response)=>{

      if(response==='deleted'){
        this.deleted();
      }
      else{
        this.updated();
      }
    

    });

    
  }

  
  async deleted(){
    const toast= await this.toastCtrl.create({
      message:"User has been deleted",
      duration:3000,
     
    });
  return await toast.present();
}

async updated(){
  const toast= await this.toastCtrl.create({
    message:"User has been reported",
    duration:3000,
   
  });
return await toast.present();
}

  closePopup(){
    this.popCtrl.dismiss();
  }
  ngOnInit() {
  }

}
