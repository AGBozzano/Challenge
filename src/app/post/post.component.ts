import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from '../Service/card.service';
import { ChartsModule } from 'ng2-charts';

import { Card } from '../model/CardModel';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

	private infoPost : Card;
	public doughnutChartType:string = 'doughnut';
	public doughnutChartData:number[] = [20, 450, 100];

	constructor(	    
		private router : Router, 
		private cardService : CardService,
		private activatedRoute : ActivatedRoute,
	){}

	ngOnInit() {
		this.mostrarPost();
	}

  	mostrarPost(){

  		this.activatedRoute.params.subscribe(params => {
			if(!this.cardService.datos){
				this.cardService.getCard().subscribe(
					()=>{
						this.infoPost = this.cardService.getDetalleCard(params['id']);
					}
				)
			}else{
				this.infoPost = this.cardService.getDetalleCard(params['id']);
			}
			
  		});

  		
  		
	}

}
