import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import { SettingPageModule } from './setting/setting.module';
import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { PeerIdentityPageModule } from './peer-identity/peer-identity.module';
import { ReportPageModule } from './report/report.module';
import { AccountSettingPageModule } from './account-setting/account-setting.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { UserinfoPageModule } from './userinfo/userinfo.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule, 
    SettingPageModule,
    PeerIdentityPageModule,
    ReportPageModule,
    AccountSettingPageModule,
  UserinfoPageModule],
    
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing,
    NativeRingtones,
    NativeAudio,
    FilePath
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
