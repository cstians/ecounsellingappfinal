import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depression-test',
  templateUrl: './depression-test.page.html',
  styleUrls: ['./depression-test.page.scss'],
})
export class DepressionTestPage implements OnInit {

  mainQuestion:string='1. Does the person have depression?';
  subQuestion:string='1. Has the person had at least one of the following core symptoms of depression for at least 2 weeks?';
  yesbutton:string='';
  nobutton:string='';
  toggle:string='Go Home';

  constructor(private router:Router) { }


  yesMethod(){

  if(this.mainQuestion==='1. Does the person have depression?'){

    this.mainQuestion='2. Has the person had several of the following additional symptoms  for at least 2 weeks:';
    this.subQuestion='';
    this.toggle='Previous Question';
  }

else if(this.mainQuestion==='2. Has the person had several of the following additional symptoms  for at least 2 weeks:'){
  this.mainQuestion='3. Does the person have considerable difﬁculty with  daily functioning in personal, family, social, educational, occupational or other areas';
  this.subQuestion='';
  this.toggle='Previous Question';
}

else if(this.mainQuestion==='3. Does the person have considerable difﬁculty with  daily functioning in personal, family, social, educational, occupational or other areas'){
  this.mainQuestion='4. Are there other possible explanations  for the symptoms?';
  this.subQuestion='4. IS THIS A PHYSICAL CONDITION THAT CAN RESEMBLE OR EXACERBATE DEPRESSION? Are there signs and symptoms suggesting anaemia, malnutrition,  hypothyroidism, mood changes from substance use and medication side-effects  (e.g. mood changes from steroids)?';
  this.toggle='Previous Question';
}

else if(this.mainQuestion==='4. Are there other possible explanations  for the symptoms?'){
  this.mainQuestion='5. Do depressive symptoms remain after treatment?';
  this.subQuestion='';
  this.toggle='Previous Question';
     
}

else if(this.mainQuestion==='5. Do depressive symptoms remain after treatment?'){
  this.mainQuestion='6. IS THERE A HISTORY OF MANIA?';
  this.subQuestion='6. Have several of the following symptoms occurred simultaneously, lasting for at least 1 week, and severely enough to interfere signiﬁcantly with work and social activities or requiring hospitalization or conﬁnement?';
  this.toggle='Previous Question';
}

else if(this.mainQuestion==='6. IS THERE A HISTORY OF MANIA?'){
  this.mainQuestion='7. DEPRESSIVE EPISODE IN BIPOLAR DISORDER is likely';
  this.subQuestion='';
  this.yesbutton='hide';
  this.nobutton='hide';
  this.toggle='Go Home'
}

else if(this.mainQuestion==='7. HAS THERE BEEN A MAJOR LOSS (E.G. BEREAVEMENT)  WITHIN THE LAST 6 MONTHS?'){
  this.mainQuestion='8. Are any of the following symptoms present?';
  this.subQuestion='';
  this.toggle='Previous Question';
}

else if(this.mainQuestion==='8. Are any of the following symptoms present?'){
  this.mainQuestion='9. DEPRESSION is likely';
  this.subQuestion='';
  this.yesbutton='hide';
  this.nobutton='hide';
  this.toggle='Go Home';
}

else if(this.mainQuestion==='10. Does the person have a previous history of depression?'){
  this.mainQuestion='9. DEPRESSION is likely';
  this.subQuestion='';
  this.yesbutton='hide';
  this.nobutton='hide';
  this.toggle='Go Home';
}





  }

  noMethod(){

     if(this.mainQuestion==='1. Does the person have depression?'){
       this.mainQuestion=' 2. Depression is unlikely';
       this.subQuestion='';
       this.yesbutton='hide';
       this.nobutton='hide';
       this.toggle='Go Home';
     }

     else if(this.mainQuestion==='2. Has the person had several of the following additional symptoms  for at least 2 weeks:'){
         this.mainQuestion='3. Depression is unlikely';
         this.subQuestion='';
         this.yesbutton='hide';
         this.nobutton='hide';
         this.toggle='Go Home';
     }

     else if(this.mainQuestion==='3. Does the person have considerable difﬁculty with  daily functioning in personal, family, social, educational, occupational or other areas'){
      this.mainQuestion='4. Depression is unlikely';
      this.subQuestion='';
      this.yesbutton='hide';
      this.nobutton='hide';
      this.toggle='Go Home';
     }

     else if(this.mainQuestion==='4. Are there other possible explanations  for the symptoms?'){
      this.mainQuestion='6. IS THERE A HISTORY OF MANIA?';
      this.subQuestion='6. Have several of the following symptoms occurred simultaneously, lasting for at least 1 week, and severely enough to interfere signiﬁcantly with work and social activities or requiring hospitalization or conﬁnement?';
      this.toggle='Previous Question'

     }

     else if(this.mainQuestion==='5. Do depressive symptoms remain after treatment?'){
      this.mainQuestion='5. No treatment needed';
      this.subQuestion='';
      this.yesbutton='hide';
      this.nobutton='hide';
      this.toggle='Go Home'
     }

     else if(this.mainQuestion==='6. IS THERE A HISTORY OF MANIA?'){
      this.mainQuestion='7. HAS THERE BEEN A MAJOR LOSS (E.G. BEREAVEMENT)  WITHIN THE LAST 6 MONTHS?';
      this.subQuestion='';
      this.toggle='Previous Question';
     }

     else if(this.mainQuestion==='7. HAS THERE BEEN A MAJOR LOSS (E.G. BEREAVEMENT)  WITHIN THE LAST 6 MONTHS?'){
      this.mainQuestion='8. DEPRESSION is likely';
      this.subQuestion='';
      this.yesbutton='hide';
      this.nobutton='hide';
      this.toggle='Go Home'
     }

     else if(this.mainQuestion==='8. Are any of the following symptoms present?'){
      this.mainQuestion='10. Does the person have a previous history of depression?';
      this.subQuestion='';
      this.toggle='Previous Question';
     }
     else if(this.mainQuestion==='10. Does the person have a previous history of depression?'){
      this.mainQuestion='Do not manage for depression.';
      this.subQuestion='';
      this.yesbutton='hide';
      this.nobutton='hide';
      this.toggle='Go Home'
     
     }




  }

  back(){

    if(this.toggle==='Go Home'){
     this.router.navigateByUrl('/home');
    }
    
    else if(this.toggle==='Previous Question' && this.mainQuestion==='2. Has the person had several of the following additional symptoms  for at least 2 weeks:'){
      this.mainQuestion='1. Does the person have depression?'
      this.subQuestion='1. Has the person had at least one of the following core symptoms of depression for at least 2 weeks?';
      this.toggle='Go Home';
    }
    
    else if(this.toggle==='Previous Question' && this.mainQuestion==='3. Does the person have considerable difﬁculty with  daily functioning in personal, family, social, educational, occupational or other areas'){
      this.mainQuestion='2. Has the person had several of the following additional symptoms  for at least 2 weeks:';
      this.subQuestion='';
      this.toggle='Previous Question';
    }

    else if(this.toggle==='Previous Question' && this.mainQuestion==='4. Are there other possible explanations  for the symptoms?'){
      this.mainQuestion='3. Does the person have considerable difﬁculty with  daily functioning in personal, family, social, educational, occupational or other areas';
      this.subQuestion='';
      this.toggle='Previous Question';
    }
    else if(this.toggle==='Previous Question' && this.mainQuestion==='5. Do depressive symptoms remain after treatment?'){
      this.mainQuestion='4. Are there other possible explanations  for the symptoms?';
      this.subQuestion='4. IS THIS A PHYSICAL CONDITION THAT CAN RESEMBLE OR EXACERBATE DEPRESSION? Are there signs and symptoms suggesting anaemia, malnutrition,  hypothyroidism, mood changes from substance use and medication side-effects  (e.g. mood changes from steroids)?';
      this.toggle='Previous Question';
    }
     else if(this.toggle==='Previous Question' && this.mainQuestion==='6. IS THERE A HISTORY OF MANIA?'){
      this.mainQuestion='4. Are there other possible explanations  for the symptoms?';
      this.subQuestion='4. IS THIS A PHYSICAL CONDITION THAT CAN RESEMBLE OR EXACERBATE DEPRESSION? Are there signs and symptoms suggesting anaemia, malnutrition,  hypothyroidism, mood changes from substance use and medication side-effects  (e.g. mood changes from steroids)?';
      this.toggle='Previous Question';
     }

     else if(this.toggle==='Previous Question' && this.mainQuestion==='7. HAS THERE BEEN A MAJOR LOSS (E.G. BEREAVEMENT)  WITHIN THE LAST 6 MONTHS?'){
      this.mainQuestion='6. IS THERE A HISTORY OF MANIA?';
      this.subQuestion='6. Have several of the following symptoms occurred simultaneously, lasting for at least 1 week, and severely enough to interfere signiﬁcantly with work and social activities or requiring hospitalization or conﬁnement?';
      this.toggle='Previous Question';
     }

     else if(this.toggle==='Previous Question' && this.mainQuestion==='8. Are any of the following symptoms present?'){
      this.mainQuestion='7. HAS THERE BEEN A MAJOR LOSS (E.G. BEREAVEMENT)  WITHIN THE LAST 6 MONTHS?';
      this.subQuestion='';
      this.toggle='Previous Question';
     }
    else if(this.toggle==='Previous Question' && this.mainQuestion==='9. DEPRESSION is likely'){
      this.mainQuestion='8. Are any of the following symptoms present?';
      this.subQuestion='';
      this.toggle='Previous Question';

    }
     


  }

  ngOnInit() {
  }

}
