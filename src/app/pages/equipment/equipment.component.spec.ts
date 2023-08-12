import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipmentComponent } from './equipment.component';
import { ApiService } from '../api.service';
import { of } from 'rxjs';
import { Supplement } from 'src/app/types/supplement';

describe('EquipmentComponent', () => {
  let component: EquipmentComponent;
  let fixture: ComponentFixture<EquipmentComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentComponent],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch equipment from ApiService on ngOnInit', () => {
    const mockEquipment: Supplement[] = [
      {  EqId: 1, EqName: 'Equipment 1', Description: 'Description 1',
      Name: '',
      Price: 0,
      brand: '',

      _id: '',
      EqPrice: 0,
      EqMaterial: '',
      Eqprice: '',
      EqBrand: '',
      grams: 0,
      id: 0},
      { EqId: 1, EqName: 'Equipment 2', Description: 'Description 1',
      Name: '',
      Price: 0,
      brand: '',

      _id: '',
      EqPrice: 0,
      EqMaterial: '',
      Eqprice: '',
      EqBrand: '',
      grams: 0,
      id: 0},
    ];

    spyOn(apiService, 'GetEquipment').and.returnValue(of(mockEquipment));

    component.ngOnInit();

    expect(apiService.GetEquipment).toHaveBeenCalled();
    expect(component.equipment).toEqual(mockEquipment);
  });

  it('should return correct equipment photo URL', () => {
    const mockEquipment: Supplement = {
      EqId: 1, EqName: 'Equipment 1', Description: 'Description 1',
      Name: '',
      Price: 0,
      brand: '',

      _id: '',
      EqPrice: 0,
      EqMaterial: '',
      Eqprice: '',
      EqBrand: '',
      grams: 0,
      id: 0
    };

    const photoUrl = component.EquPhoto(mockEquipment);

    expect(photoUrl).toEqual(`../../../assets/EquipmentPhotos/equipment${mockEquipment.EqId}.jpg`);
  });

 
});