import { Component, OnInit, inject } from '@angular/core';
import { RestoranList } from 'src/app/models/restoran-list.model';
import { RestoranService } from 'src/app/services/restoran.service';

@Component({
  selector: 'app-restoran-list',
  templateUrl: './restoran-list.component.html',
  styleUrls: ['./restoran-list.component.css']
})
export class RestoranListComponent implements OnInit {
  restoranService: RestoranService = inject(RestoranService);
  restorani: RestoranList = new RestoranList();
  
  ngOnInit(): void {
    this.restoranService.getAllRestorants().subscribe((restoran) => {
      this.restorani = restoran;
      console.log(this.restorani);
    });
  }

}
