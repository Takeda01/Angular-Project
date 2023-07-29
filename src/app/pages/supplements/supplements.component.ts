import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Supplement } from 'src/app/types/supplement';

@Component({
  selector: 'app-supplements',
  templateUrl: './supplements.component.html',
  styleUrls: ['./supplements.component.scss']
})
export class SupplementsComponent implements OnInit {

  constructor(private api: ApiService) {}
  
  supplemets: Supplement[] = []

  ngOnInit(): void {
    this.api.GetSupplements().subscribe((supplemets =>
{
  const filteredArray = supplemets.filter(item => item.Name); 
     

      
      this.supplemets = filteredArray
    }))
  }

  SuppPhoto(s:Supplement): string{
return `../../../assets/SupplementsPhotos/supplement${s.id}.jpg`
  }

}
