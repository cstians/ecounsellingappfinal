import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController, Platform } from '@ionic/angular';
import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { AccountSettingPage } from '../account-setting/account-setting.page';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  public ringtone_1:boolean=false;
  test:string;


  constructor(private modalCtrl:ModalController,
    public nativeRingTones:NativeRingtones,
    public filepath:FilePath,
    public platform:Platform,
    private popCtrl:PopoverController,
    public nativeAudio:NativeAudio) {
      
      
     }
 
 

  closeModal(){
    this.modalCtrl.dismiss();
  }
  
  async accountSetting(){
    const popover= await this.popCtrl.create({
      component: AccountSettingPage,
      componentProps:{

      }
    });
    popover.present();


  }

playTone(){
  if(this.ringtone_1){
  console.log("playing");
  this.nativeAudio.preloadSimple('Track1','assets/audio/ringtone.wav');
  this.nativeAudio.play('Track1');
}


   
    

   

    }   
    
    
  
   

 

  ngOnInit() {
    this.nativeAudio.preloadSimple('Track1','assets/audio/ringtone.wav');
  }

}
