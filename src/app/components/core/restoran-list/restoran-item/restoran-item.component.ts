import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, inject } from '@angular/core';
import { Restoran } from 'src/app/models/restoran.model';
import { ModalService } from '../modal/services/modal.service';
import { RestoranService } from 'src/app/services/restoran.service';
import { Item } from 'src/app/models/item.model';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-restoran-item',
  templateUrl: './restoran-item.component.html',
  styleUrls: ['./restoran-item.component.css']
})
export class RestoranItemComponent implements OnInit {
  @Input() restoran: Restoran = new Restoran();
  
  restoranService: RestoranService = inject(RestoranService);
  constructor(private modalService: ModalService) {}
  probia: string = 'sss';
  ratings: number[] = [1,2,3,4,5];
  prices: number[] = [1,2,3,4,5];
  items: Item[] = [];
  brojac:  number = 0;
  proba(): void {
    for(let i = 0; i < this.restoran.rating; i++) {
      console.log(this.restoran.rating)
    }
  }

  onGetRestoran(id:number,modalTemplate: TemplateRef<any> ): void {
    this.restoranService.onGetOneRestoran(id).subscribe((value) => {
      const menu = new Menu(value.results[0]);
      const item = menu.items.map(i => new Item(i));
      this.items = item;
      this.openModal(modalTemplate);
      console.log(this.items);
      });
    
  }

  
  ngOnInit(): void {
    this.proba();

  }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate, { size: 'lg', title: 'Foo' })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
  
}
