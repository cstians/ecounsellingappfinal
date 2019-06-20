import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SettingPage } from '../setting/setting.page';
import { PopoverController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items:Array<any>=[];
  usertype:string;
  authUser:string;
  hide:string;
  name:string='';
  try:string='';

  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient,public modalCtrl:ModalController){
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.authUser=this.router.getCurrentNavigation().extras.state.authUser;
        
       }
        window.localStorage.setItem('user',this.authUser);
      });
       this.getUser();


       var notification=window.localStorage.getItem('notifyMessage');

       if(notification=='notEmpty'){
         this.hide='hidewhite';
       }
       else{
         this.hide='hidered';
       }
  }


  async setModal(ev:Event){
    //this.router.navigateByUrl('/setting');
    const modal=await this.modalCtrl.create({
      component: SettingPage,
      componentProps:{
        val:'2'
      }
    });
    modal.present();

  
  }

  notify(){
    this.router.navigateByUrl('/notification-list');
  }

  
  chat(){
    this.router.navigateByUrl('/chat');
  }
  
questionAnswer(){
    var authuser=window.localStorage.getItem('user');
    var user='User';
    var peer='Peer';

    let navigationEtras:NavigationExtras={
      state:{
        authuser:authuser

      }
    }

    var Type=window.localStorage.getItem('usertype');

    if(Type===''+user){
    this.router.navigate(['peer-view-questions'],navigationEtras);
    }
    else{
     this.router.navigate(['question-answer'],navigationEtras);
    }
  }

  depression(){
    this.router.navigateByUrl('/depression-test')
  }

  menu(){
    this.router.navigateByUrl('/menu');
  }

  chatHome(item){
    window.localStorage.setItem('display_name',item.display_name);
   
    this.router.navigateByUrl('/chatscreen');
  }

  getUser(){
   var typestore=window.localStorage.getItem('usertype');
   
   let data={
       "type":''+typestore
    };

    this.http.post('http://localhost:8000/api/getuser',data).subscribe((data:any)=>{
      this.items=data;
   });
   
  }
  
  remove(item){
    for(var i=0;i<this.items.length;i++){
      if(this.items[i]==item){
       this.items.splice(i,1); 
      }
    }

  }

  logout(){
    this.router.navigateByUrl('/login');
  }
  

    
}
