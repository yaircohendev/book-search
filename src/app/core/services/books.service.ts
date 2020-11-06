import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }


  getBooks(searchQuery: string): any {
    return this.http.get<any>(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
  }
}
