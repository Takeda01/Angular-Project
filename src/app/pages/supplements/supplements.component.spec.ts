import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupplementsComponent } from './supplements.component';
import { of } from 'rxjs';
import { ApiService } from '../api.service';
import { Supplement } from 'src/app/types/supplement';

describe('SupplementsComponent', () => {
  let component: SupplementsComponent;
  let fixture: ComponentFixture<SupplementsComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  const mockSupplements: Supplement[] = [
    { id: 1, Name: 'Supplement 1', Price: 10, Description: 'Description 1', brand: 'Brand 1', grams: 100, _id: 'id1', EqId: 10, EqName: '', EqPrice: 20, EqMaterial: '', Eqprice: '', EqBrand: '' },
    { id: 2, Name: 'Supplement 2', Price: 20, Description: 'Description 2', brand: 'Brand 2', grams: 200, _id: 'id2', EqId: 102, EqName: '', EqPrice: 30, EqMaterial: '', Eqprice: '', EqBrand: '' },
  ];

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['GetSupplements']);
    apiServiceSpy.GetSupplements.and.returnValue(of(mockSupplements));

    TestBed.configureTestingModule({
      declarations: [SupplementsComponent],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    });

    fixture = TestBed.createComponent(SupplementsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and filter supplements on ngOnInit', () => {
    fixture.detectChanges();
    expect(apiServiceSpy.GetSupplements).toHaveBeenCalled();
    expect(component.supplemets).toEqual(mockSupplements.filter(s => s.Name));
  });

  it('should generate correct supplement photo URL', () => {
    const mockSupplement: Supplement = { id: 3, Name: 'Supplement 3', Price: 30, Description: 'Description 3', brand: 'Brand 3', grams: 300, _id: 'id3', EqId: 103, EqName: 'Equipment 3', EqPrice: 40, EqMaterial: 'Material 3', Eqprice: 'expensive', EqBrand: 'Equipment Brand 3' };
    const photoUrl = component.SuppPhoto(mockSupplement);

    expect(photoUrl).toEqual(`../../../assets/SupplementsPhotos/supplement${mockSupplement.id}.jpg`);
  });
});
