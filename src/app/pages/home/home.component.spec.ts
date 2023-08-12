import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Article } from '../../types/article';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  const mockArticles: Article[] = [
    { id: 1, Name: 'Article 1', Link: 'link1', Topic: 'topic1', Brief: 'brief1' },
    { id: 2, Name: 'Article 2', Link: 'link2', Topic: 'topic2', Brief: 'brief2' },
  ];

  beforeEach(() => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['GetArticles']);
    apiServiceSpy.GetArticles.and.returnValue(of(mockArticles));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch articles on ngOnInit', () => {
    fixture.detectChanges();
    expect(apiServiceSpy.GetArticles).toHaveBeenCalled();
    expect(component.articles).toEqual(mockArticles);
  });

  it('should navigate to /equipment when Equip() is called', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    component.Equip();

    expect(navigateSpy).toHaveBeenCalledWith(['/equipment']);
  });

  it('should navigate to /supplements when Sup() is called', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    component.Sup();

    expect(navigateSpy).toHaveBeenCalledWith(['/supplements']);
  });

  it('should generate correct article image URL', () => {
    const mockArticle: Article = { id: 3, Name: 'Article 3', Link: 'link3', Topic: 'topic3', Brief: 'brief3' };
    const imageUrl = component.ArticleImage(mockArticle);

    expect(imageUrl).toEqual(`../../../assets/ArticlePhotos/article${mockArticle.id}.jpg`);
  });
});
