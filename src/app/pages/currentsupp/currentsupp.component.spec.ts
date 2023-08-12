import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentsuppComponent } from './currentsupp.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { RandomiseService } from '../randomise.service';
import { Supplement } from 'src/app/types/supplement';

describe('CurrentitemComponent', () => {
  let component: CurrentsuppComponent ;
  let fixture: ComponentFixture<CurrentsuppComponent >;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let cartServiceSpy: jasmine.SpyObj<CartService>;
  let randomiseServiceSpy: jasmine.SpyObj<RandomiseService>;
  let mockActivatedRoute: ActivatedRoute;
  let mockRouter: Router;

  const mockItem: Supplement = {
    id: 1,
    Name: 'Supplement 1',
    Price: 10,
    Description: 'Description 1',
    brand: 'Brand 1',
    grams: 100,
    _id: 'id1',
    EqId: 101,
    EqName: '',
    EqPrice: 20,
    EqMaterial: '',
    Eqprice: '',
    EqBrand: ''
  };

  const mockProducts: Supplement[] = [
    { id: 1, Name: 'Product 1', Price: 10, Description: 'Description 1', brand: 'Brand 1', grams: 100, _id: 'id1', EqId: 101, EqName: '', EqPrice: 20, EqMaterial: '', Eqprice: '', EqBrand: '' },
    { id: 2, Name: 'Product 2', Price: 20, Description: 'Description 2', brand: 'Brand 2', grams: 200, _id: 'id2', EqId: 102, EqName: '', EqPrice: 30, EqMaterial: '', Eqprice: '', EqBrand: '' }
  ];

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['GetItem', 'GetSupplements']);
    apiServiceSpy.GetItem.and.returnValue(of(mockItem));
    apiServiceSpy.GetSupplements.and.returnValue(of(mockProducts));

    cartServiceSpy = jasmine.createSpyObj('CartService', ['AddItem']);

    randomiseServiceSpy = jasmine.createSpyObj('RandomiseService', ['generateSequence']);
    randomiseServiceSpy.generateSequence.and.returnValue([0, 1, 2, 3]);

    mockActivatedRoute = {
        snapshot: {
            params: { themeId: '1' }
        }
    } as unknown as ActivatedRoute;

    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [CurrentsuppComponent ],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: CartService, useValue: cartServiceSpy },
        { provide: RandomiseService, useValue: randomiseServiceSpy },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter }
      ]
    });

    fixture = TestBed.createComponent(CurrentsuppComponent );
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch item and products on ngOnInit', () => {
    fixture.detectChanges();
    expect(apiServiceSpy.GetItem).toHaveBeenCalledWith('1');
    expect(apiServiceSpy.GetSupplements).toHaveBeenCalled();
    expect(component.item).toEqual(mockItem);
    expect(component.products).toEqual(mockProducts.slice(0, 4));
  });

  it('should generate correct equipment photo URL', () => {
    const photoUrl = component.Photo(mockItem);
    expect(photoUrl).toEqual(`../../../assets/EquipmentPhotos/equipment${mockItem.EqId}.jpg`);
  });

  it('should add item to cart and set Added to true', () => {
    component.Add(mockItem);
    expect(cartServiceSpy.AddItem).toHaveBeenCalledWith(mockItem);
    expect(component.Added).toBeTrue();
  });

  it('should navigate and refresh on Nav', () => {
    component.Nav('id123');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/equipment/id123']);
    expect(component.ngOnInit).toHaveBeenCalled();
  });
});