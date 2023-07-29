import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/types/equipment';
import { ApiService } from '../api.service';
import { Supplement } from 'src/app/types/supplement';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit{
  equipment: Supplement[] = []

constructor(private api: ApiService) {}
 
  

ngOnInit(): void {
 this.api.GetEquipment().subscribe((equip) => 
{
 const filteredArray = equip.filter(item => item.EqName); 
 
  this.equipment = filteredArray
  
})
}

EquPhoto(e: Supplement): string{
return `../../../assets/EquipmentPhotos/equipment${e.EqId}.jpg`
}
}
