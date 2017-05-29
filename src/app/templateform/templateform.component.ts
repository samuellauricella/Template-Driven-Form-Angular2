import { Component, OnInit } from '@angular/core';

export class User {
  name: string;
  userName: string;
}

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  user: User;
  submitted:boolean = false;


  constructor() { }

  ngOnInit() {
    this.user= {
      name:'',
      userName:''
    }
  }

  get diagnostic(){
    return JSON.stringify(this.user);
  }

  processForm(){
    console.log(this.user)
    this.submitted= true;
  }
}
