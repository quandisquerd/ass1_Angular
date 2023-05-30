import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`http://localhost:3000/product`)
  }
  getOne(id:string|number): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/product/${id}`)
  }
  remove(id:string|number): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/product/${id}`)
  }
  Add(pro:IProduct): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(`http://localhost:3000/product`,pro)
  }
  Edit(pro:IProduct): Observable<IProduct[]> {
    return this.http.put<IProduct[]>(`http://localhost:3000/product/${pro.id}`,pro)
  }
}
