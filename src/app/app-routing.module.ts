import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'instruction-manual', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'peer-view-questions', loadChildren: './peer-view-questions/peer-view-questions.module#PeerViewQuestionsPageModule' },
  { path: 'question-answer', loadChildren: './question-answer/question-answer.module#QuestionAnswerPageModule' },
  { path: 'ask-question', loadChildren: './ask-question/ask-question.module#AskQuestionPageModule' },
  { path: 'depression-test', loadChildren: './depression-test/depression-test.module#DepressionTestPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'motivation', loadChildren: './motivation/motivation.module#MotivationPageModule' },
  { path: 'quotation', loadChildren: './quotation/quotation.module#QuotationPageModule' },
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule' },
  { path: 'success-stories', loadChildren: './success-stories/success-stories.module#SuccessStoriesPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'chatscreen', loadChildren: './chatscreen/chatscreen.module#ChatscreenPageModule' },
  { path: 'instruction-manual', loadChildren: './instruction-manual/instruction-manual.module#InstructionManualPageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'peer-identity', loadChildren: './peer-identity/peer-identity.module#PeerIdentityPageModule' },
  { path: 'notification-list', loadChildren: './notification-list/notification-list.module#NotificationListPageModule' },
  { path: 'notification-details', loadChildren: './notification-details/notification-details.module#NotificationDetailsPageModule' },
  { path: 'userinfo', loadChildren: './userinfo/userinfo.module#UserinfoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
