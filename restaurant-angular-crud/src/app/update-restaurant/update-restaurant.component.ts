import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import{RestoService} from '../resto.service'
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert:boolean=false;
  updateRestaurant = new FormGroup ({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  constructor(private router:ActivatedRoute,
              private resto:RestoService
              ) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.resto.getCurrentRestaurant(this.router.snapshot.params.id)
    .subscribe((result)=>{
      this.updateRestaurant = new FormGroup ({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      });
      console.warn('Result' , result)
    })
  }
  collection(){
    console.warn(this.updateRestaurant.value)
    this.resto.updateRestaurantService(this.router.snapshot.params.id,this.updateRestaurant.value)
    .subscribe((result)=>{
      this.alert=true;
    })
    setTimeout(()=>{
      this.alert=false
    },3000)
  }
  closeAlert(){
    this.alert=false;
  }

}
