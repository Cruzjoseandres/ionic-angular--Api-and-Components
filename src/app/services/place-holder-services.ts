import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaceHolderServices {
  private _http = inject(HttpClient);
  private baseUrl = 'https://jsonplaceholder.typicode.com';


  getPlaceHolder<T>(): Observable<T[]>{
    return this._http.get<T[]>(`${this.baseUrl}/posts`);
  }

  getPlaceHolderById<T>(id: String): Observable<T> {
    return this._http.get<T>(`${this.baseUrl}/posts/${id}`);
  }
}
