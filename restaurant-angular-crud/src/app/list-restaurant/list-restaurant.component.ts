import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  constructor(private resto:RestoService) { }
  collection:any = [];
  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      console.warn(result)
      this.collection = result;
    });
  }
  deleteRestaurant(item){
    this.resto.deleteRestaurantService(item).subscribe((result)=>{
      console.warn("result",result)
    })
  }
  // deleteResoModal(id){
  //   let ID = id;
  //   console.log(id)
  //   document.getElementById('modal').style.display = "block";
  //   document.getElementById('deleteThis').addEventListener('click',deleteRestaurant(ID))
      
  //     // document.getElementById('modal').style.display = "none";
  //   document.getElementById('closeModal').addEventListener('click',()=>{
  //     document.getElementById('modal').style.display = "none";
  //   })
  // }

  
}
