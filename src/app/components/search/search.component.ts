import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public heroes: any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private _heroeService: HeroesService, 
    private router: Router) { 
      this.activatedRoute.params.subscribe(params => {
        this.heroes = this._heroeService.buscarHeroe(params['texto']);
        console.log('1', this.heroes);
      });
    }

  ngOnInit() {
    console.log('2 ', this.heroes);
  }

}
