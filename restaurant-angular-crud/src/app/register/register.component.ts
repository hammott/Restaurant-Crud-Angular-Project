import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {RestoService} from '../resto.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean = false;

  userRegister = new FormGroup ({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  collection(){
    console.warn(this.userRegister.value);
    this.resto.registerUser(this.userRegister.value)
    .subscribe((result)=>{
      console.warn(result);
      this.alert=true;
    });
    setTimeout(()=>{
      this.alert=false
    },3000)
  }
  closeAlert(){
    this.alert=false;
  }

}
