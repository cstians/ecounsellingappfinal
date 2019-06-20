import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private router:Router) { }

  developer(){
    this.router.navigateByUrl('/developers');
  }

  backMenu(){
    this.router.navigateByUrl('/menu');
  }


  ngOnInit() {
  }

}
