import { Component, OnInit } from '@angular/core';
import { Supplement } from 'src/app/types/supplement';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { RandomiseService } from '../randomise.service';

@Component({
  selector: 'app-currentitem',
  templateUrl: './currentitem.component.html',
  styleUrls: ['./currentitem.component.scss']
})
export class CurrentitemComponent implements OnInit{
item: Supplement | undefined
Added: boolean = false




sequence: number[] = this.Randomise.generateSequence()


constructor(private api: ApiService, private activeRoute: ActivatedRoute, private cartService: CartService, private router: Router,private Randomise: RandomiseService) {
 
  
}
products: Supplement[] = []
  ngOnInit(): void {
    this.FetchItem()
    this.api.GetSupplements().subscribe((supplemets =>
      {
        const filteredArray = supplemets.filter(item => item.EqName); 
           
      
            
            this.products = filteredArray.slice(this.sequence[0],this.sequence[0] + 4)
          }))
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

Add(item:Supplement){
this.cartService.AddItem(item)
this.Added = true
}
Nav(id:string){
  this.router.navigate([`/equipment/${id}`])
this.ngOnInit()
  }
}
