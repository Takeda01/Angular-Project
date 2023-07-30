import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Supplement } from 'src/app/types/supplement';

@Component({
  selector: 'app-currentsupp',
  templateUrl: './currentsupp.component.html',
  styleUrls: ['./currentsupp.component.scss']
})
export class CurrentsuppComponent implements OnInit {

/**
 *
 */
constructor(private api: ApiService, private activeRoute: ActivatedRoute) {
  
  
}
products: Supplement[] = []
item: Supplement | undefined

ngOnInit(): void {
  this.FetchItem()
  this.api.GetSupplements().subscribe((supplemets =>
    {
      const filteredArray = supplemets.filter(item => item.Name); 
         
    
          
          this.products = filteredArray.slice(1,5)
        }))
}

FetchItem():void{
const id = this.activeRoute.snapshot.params['themeId']
this.api.GetItem(id).subscribe((item) => {
this.item = item
})
}


Photo(item: Supplement): string{
return `../../../assets/SupplementsPhotos/supplement${item.id}.jpg`
}

}
