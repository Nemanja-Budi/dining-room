import { Component, Input, OnInit } from '@angular/core';
import { Restoran } from 'src/app/models/restoran.model';

@Component({
  selector: 'app-restoran-item',
  templateUrl: './restoran-item.component.html',
  styleUrls: ['./restoran-item.component.css']
})
export class RestoranItemComponent implements OnInit {
  @Input() restoran: Restoran = new Restoran();

  ratings: number[] = [1,2,3,4,5];
  prices: number[] = [1,2,3,4,5];
  brojac:  number = 0;
  proba(): void {
    for(let i = 0; i < this.restoran.rating; i++) {
      console.log(this.restoran.rating)
    }
  }

  
  ngOnInit(): void {
    this.proba();
  }
  
}
