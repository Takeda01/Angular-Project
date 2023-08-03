import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Supplement } from 'src/app/types/supplement';
import { CartService } from '../cart.service';
import { RandomiseService } from '../randomise.service';

@Component({
  selector: 'app-currentsupp',
  templateUrl: './currentsupp.component.html',
  styleUrls: ['./currentsupp.component.scss']
})
export class CurrentsuppComponent implements OnInit {

/**
 *
 */
constructor(private api: ApiService, private activeRoute: ActivatedRoute, private cartService: CartService, private router: Router, private Randomise: RandomiseService) {
  
  
}
Added: boolean = false
isNavigating = false;
products: Supplement[] = []
item: Supplement | undefined
sequence: number[] = this.Randomise.generateSequence()

ngOnInit(): void {
  this.FetchItem()
  this.api.GetSupplements().subscribe((supplemets =>
    {
      const filteredArray = supplemets.filter(item => item.Name); 
         
    
          
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
return `../../../assets/SupplementsPhotos/supplement${item.id}.jpg`
}
Add(item:Supplement){
  this.cartService.AddItem(item)
  this.Added = true
}
Nav(id:string){
  this.router.navigate([`/supplements/${id}`])
this.ngOnInit()
  }
}
