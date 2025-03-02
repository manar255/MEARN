import { inject } from '@angular/core';
import { HeroServiceForLab as HeroService } from './hero.lab.service';
import { of } from 'rxjs';
import { Hero } from '../../hero';

describe('3-hero service (http) integration testing:', () => {
  let heroService: HeroService;
  let mockHttpClient: any;
  let mockHeroes: Hero[];

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'put']);
    heroService = new HeroService(mockHttpClient);
    mockHeroes = [
      { id: 1, name: 'Hero One', strength: 10 },
      { id: 2, name: 'Hero Two', strength: 50 },
    ];
    mockHttpClient.get.and.returnValue(of(mockHeroes));
  });
  it('getHeroes function: send request and receive response successfully', () => {

    heroService.getHeroes().subscribe((heroes) => {
      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(mockHeroes);
    });
  });
  it('updateHero function: send request and receive response successfully', () => {
     let newMockHero = { id: 1, name: 'Updated Hero',strength:20 };

        mockHttpClient.put.and.returnValue(of(newMockHero));

        heroService.updateHero(newMockHero).subscribe(response => {
            expect(response).toEqual(newMockHero);
        });
  });
});
