import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() public heroe:any = {};
  @Input() public indice:number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) { 
    this.heroeSeleccionado = new EventEmitter;
  }

  ngOnInit() {
  }

  public verHeroe(): void{
    // this.router.navigate(['/heroe', this.indice]);
    this.heroeSeleccionado.emit(this.indice);
  }

}
