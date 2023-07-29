import { Component, OnInit } from '@angular/core';
import { Supplement } from 'src/app/types/supplement';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currentitem',
  templateUrl: './currentitem.component.html',
  styleUrls: ['./currentitem.component.scss']
})
export class CurrentitemComponent implements OnInit{
item: Supplement | undefined





constructor(private api: ApiService, private activeRoute: ActivatedRoute) {
 
  
}
  ngOnInit(): void {
    this.FetchItem()
  }

FetchItem():void{
  const id = this.activeRoute.snapshot.params['themeId']
this.api.GetItem(id).subscribe((item) => {
  this.item = item
})
}
Photo(item: Supplement): string{
return `../../../assets/EquipmentPhotos/equipment${item.EqId}.jpg`
}
}