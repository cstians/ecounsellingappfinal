import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PeerViewQuestionsPage } from './peer-view-questions.page';

const routes: Routes = [
  {
    path: '',
    component: PeerViewQuestionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PeerViewQuestionsPage]
})
export class PeerViewQuestionsPageModule {}
