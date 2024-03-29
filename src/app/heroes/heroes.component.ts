import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;
  
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
    this.messageService.addMessage("HeroesComponent: Selected hero id=${hero.id}");
  }

  constructor(private heroServise: HeroService, private messageService: MessageService) { }

  getHeroes(): void{
    this.heroServise.getHeroes()
      .subscribe(heroes => this.heroes = heroes)   
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  

}
