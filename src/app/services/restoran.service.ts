import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RestoranList } from '../models/restoran-list.model';
import { Item } from '../models/item.model';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class RestoranService {

  constructor(private http: HttpClient) { }

  getAllRestorants(params?: any): Observable<RestoranList> {
    let options = {}
    if (params) {
      options = {
        params: new HttpParams()
                  .set('page', params.page || 1)
                  .set('pageSize', params.pageSize || 9)
                  .set('sort', 'name')
                  .set('filter', params.filter && JSON.stringify(params.filter) || "")
      }
    }
    return this.http.get<RestoranList>(`http://localhost:3000/api/restaurants`, options).pipe(map((restoran) => {
      return restoran
    }));
  }

  onGetOneRestoran(id: number): Observable<RestoranList> {
    return this.http.get<RestoranList>(`http://localhost:3000/api/restaurants/${id}/menus`).pipe(map((restoran) => {
      console.log(restoran);
      return restoran
    }))
  }
}
