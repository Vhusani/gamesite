import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.router.navigate(['search', form.value.search])
  }

}
