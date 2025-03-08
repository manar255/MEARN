import { inject } from '@angular/core';
import { HeroServiceForLab as HeroService } from './hero.lab.service';
import { of } from 'rxjs';
import { Hero } from '../../hero';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

describe('3-hero service (http) integration testing:', () => {
  let heroService: HeroService;
  let mockHttpClient: any;
  let mockHeroes: Hero[];
  let httpTesting: HttpTestingController;
  beforeEach(() => {
    // mockHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'put']);
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpTesting = TestBed.inject(HttpTestingController);
    heroService = TestBed.inject(HeroService);

    mockHeroes = [
      { id: 1, name: 'Hero One', strength: 10 },
      { id: 2, name: 'Hero Two', strength: 50 },
    ];
    
  });
  it('getHeroes function: send request and receive response successfully', () => {
    heroService.getHeroes().subscribe((heroes) => {
      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(mockHeroes);
    });
    let reqMock = httpTesting.expectOne('http://localhost:3000/heroes');
    expect(reqMock.request.method).toBe('GET');

    reqMock.flush(mockHeroes);
  });
  it('updateHero function: send request and receive response successfully', () => {
    let newMockHero = { id: 1, name: 'Updated Hero', strength: 20 };

    heroService.updateHero(newMockHero).subscribe((response) => {
      expect(response).toEqual(newMockHero);
    });

    let reqMock = httpTesting.expectOne('http://localhost:3000/heroes');
    expect(reqMock.request.method).toBe('PUT');

    reqMock.flush(newMockHero);
  });
  
});
