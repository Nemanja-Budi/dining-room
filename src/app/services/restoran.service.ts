import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RestoranList } from '../models/restoran-list.model';

@Injectable({
  providedIn: 'root'
})
export class RestoranService {

  constructor(private http: HttpClient) { }

  getAllRestorants(): Observable<RestoranList> {
    return this.http.get<RestoranList>(`http://localhost:3000/api/restaurants`).pipe(map((restoran) => {
      return restoran
    }));
  }
}
