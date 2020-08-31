import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert:boolean = false;
  addRestaurant = new FormGroup ({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
  collectRestaurant () {
    this.resto.saveRestaurantService(this.addRestaurant.value).subscribe((result)=>{
      console.warn("result is here" , result)
      this.alert=true;
      this.addRestaurant.reset({})
    })
    setTimeout(()=>{
      this.alert=false
    },3000)
    
    // console.warn(this.addRestaurant.value);
  }
  closeAlert(){
    this.alert=false;
  }

}
