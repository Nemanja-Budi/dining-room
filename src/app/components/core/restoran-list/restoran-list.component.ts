import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { Menu } from 'src/app/models/menu.model';
import { RestoranList } from 'src/app/models/restoran-list.model';
import { RestoranService } from 'src/app/services/restoran.service';

@Component({
  selector: 'app-restoran-list',
  templateUrl: './restoran-list.component.html',
  styleUrls: ['./restoran-list.component.css']
})
export class RestoranListComponent implements OnInit {
  restoranService: RestoranService = inject(RestoranService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  restorani: RestoranList = new RestoranList();
  restoraniCount: number = 1;
  items: Item[] = [];
  queryParams = {
    page: 1,
    pageSize: 9,
    filter: {
      cuisine: '',
      priceFrom: 1,
      priceTo: 5
    }
  }

 
  onChangePage(changedPage: number): void {
    this.queryParams.page = changedPage;
    this.onGetAllRestorants();
  }

  onChangePrice(event: {from: number, to: number}): void {
    this.queryParams.filter.priceFrom = event.from;
    this.queryParams.filter.priceFrom = event.to;
    this.onGetAllRestorants();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      const cuisine = param.get('cuisine');
      if(cuisine !== null) {
        this.queryParams.filter.cuisine = cuisine;
      }
      this.onGetAllRestorants();   
    });
  }

  onGetAllRestorants(): void {
    this.restoranService.getAllRestorants(this.queryParams).subscribe((restoran) => {
      this.restorani = restoran;
      this.restoraniCount = this.restorani.count;   
    });
  }

}
