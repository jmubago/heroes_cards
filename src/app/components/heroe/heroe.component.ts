import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroe:any = {};

  constructor(
    private activatedRoute:ActivatedRoute, 
    private _heroesService: HeroesService,
    private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = _heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

  public volverHeroes(): void {
    this.router.navigate(['/heroes']);
  }

}
