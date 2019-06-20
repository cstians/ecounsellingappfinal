import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-instruction-manual',
  templateUrl: './instruction-manual.page.html',
  styleUrls: ['./instruction-manual.page.scss'],
})
export class InstructionManualPage implements OnInit {

  card2:string='c2';
  card1:string='';
  but1:string='';
  but2:string='but2';
  but3:string='but3';
  card3:string='c3';

  constructor(private router:Router) { }

  button1(){
    this.card1='c1';
    this.card2='';
    this.but1='but1';
    this.but2='';
    this.but3='but3';
    this.card3='c3';
  }

  button2(){
   this.card1='c1';
   this.card2='c2';
   this.but1='but1';
   this.but2='but2';
   this.but3='';
   this.card3='';

  }

  button3(){
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
