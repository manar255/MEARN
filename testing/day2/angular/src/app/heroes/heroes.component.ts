import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../services/hero service/hero.service';
import { HeroComponent } from '../hero/hero.component';

@Component({
    selector: 'app-heroes',
    imports: [HeroComponent],
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { 
    this.heroes=[]
  }

  ngOnInit() {
    this.getHeroes()    
  }
  
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string,strength:number = 11): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name, strength } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h.id !== hero.id);
    this.heroService.deleteHero(hero)
  }

}
