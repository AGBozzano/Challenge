import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../Service/card.service';

import { Card } from '../model/CardModel';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	public listaCard : Card[];

	constructor(
	    private router : Router, 
	    private cardService : CardService,
	){}

	ngOnInit() {
		this.mostrarCard();
	}

	mostrarCard(){

		if(!this.cardService.datos){
			this.cardService.getCard().subscribe(
				()=>{
					this.listaCard = this.cardService.datos;
				}
			)
		}else{
			this.listaCard = this.cardService.datos;
		}
	}

	filtrarCatalogo(filtro:string){
	  this.listaCard = this.cardService.filtrarCard(filtro); 
	}
	filtrarTech(filtro:string){
	  this.listaCard = this.cardService.filtrarCardTech(filtro);
	}


}
