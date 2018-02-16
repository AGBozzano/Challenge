import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Router } from '@angular/router';
import 'rxjs/Rx';

import { Card } from '../model/CardModel';

@Injectable()
export class CardService {

	public datos : Card[];
	public listadatos : Card[];

	constructor(
		private http : Http, 
		private router : Router
	){}

	public getCard(){
	  return this.http.get('../../assets/cards.json').map(
	    (response : Response) => {
	      this.datos =  response.json(); 
	    })
	}

	public getDetalleCard(idCard:number) : Card {
		for(let item of this.datos) {
		  if(item.cardId == idCard) {
		    return item;
		  }
		}
		return null;
	}

  	public filtrarCard(filtro:string){
  		this.listadatos = this.datos;  
  		filtro.toLowerCase(); 
  		let itemMatch : Card[] = []; 
  		for(let item of this.listadatos){ 
    		let nombre = item.cardDescription.toLowerCase();
    		if(nombre.includes(filtro)){ 
      			itemMatch.push(item)
      		} 
    	}
    	return itemMatch; 
  	}
  	public filtrarCardTech(filtro:string){
  		this.listadatos = this.datos;  
  	
  		let itemMatch : Card[] = []; 
  		for(let item of this.listadatos){ 
    		let Tech = item.cardTechnology;
    		if(Tech.includes(filtro)){ 
      			itemMatch.push(item)
      		} 
    	}
    	return itemMatch; 
  	}

}
