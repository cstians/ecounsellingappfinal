import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public popoverCtrl:PopoverController, private router:Router,public socialsharing:SocialSharing) { }
  Share(){
    this.socialsharing.share('hello','to you',null,'https://www.facebook.com').then((data)=>{
    },(err)=>{
       alert(JSON.stringify(err));
    })
    }



  about(){
    this.router.navigateByUrl('/about');
  }

  mVideo(){
    this.router.navigateByUrl('/motivation');
  }

  qoute(){
    this.router.navigateByUrl('/quotation');
  }

  feeds(){
    this.router.navigateByUrl('/feedback');
  }

  share(){
    this.router.navigateByUrl('/home');
  }

  stories(){
    this.router.navigateByUrl('/success-stories');
  }
  menu_Home(){
    this.router.navigateByUrl('/home');
  }

async feedpop(event){
      const popover= await this.popoverCtrl.create({
        component:RegisterPage,
        event
      });
      
      return await popover.present();
    }

  ngOnInit() {
  }

}
