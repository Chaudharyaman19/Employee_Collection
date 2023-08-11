import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
//now i am doing post get delet put methods
export class ApiService {
  delete(arg0: string) {
    throw new Error('Method not implemented.');
  }
  deleteresturant: any;
  api: any;
  constructor(private _http: HttpClient) {}
  postresturant(data: any) {
    return this._http.post<any>('http://localhost:3000/posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );
    //get method
  }
  getresturant() {
    return this._http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
    //update  resturant
  }
  updateresturant(date: any, id: number) {
    return this._http.put<any>('http://localhost:3000/posts' + id, date).pipe(
      map((res: any) => {
        return res;
      })
    );
    //delete  resturant
  }
  delateresturant(id: number) {
    return this._http.delete<any>('http://localhost:3000/posts' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
    //update  resturant
  }
}
