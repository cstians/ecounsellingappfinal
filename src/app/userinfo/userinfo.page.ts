import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.page.html',
  styleUrls: ['./userinfo.page.scss'],
})
export class UserinfoPage implements OnInit {

  displayname:string='';

  constructor(private router:Router,private popCtrl:PopoverController) { 
   var display_name=window.localStorage.getItem('displayName').substring(0,7);
   this.displayname=display_name;

  }

  confirm(){

    this.router.navigateByUrl('/login');
    this.popCtrl.dismiss();

  }

  ngOnInit() {
  }

}
