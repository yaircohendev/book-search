import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Book,
  BookData,
  BookResponse,
  BooksResponse,
} from '../models/books.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}
  myWishList$ = new BehaviorSubject<Book[]>([]);

  updateWishList(wishList: Book[]): void {
    this.myWishList$.next(wishList);
    localStorage.setItem('wishlist', JSON.stringify(wishList));
  }

  addToWishList(book: Book): void {
    const wishList = this.myWishList$.getValue();
    const alreadyExists = wishList.some((b) => b.title === book.title);
    if (!alreadyExists) {
      const updatedWishList = [...wishList, book];
      this.updateWishList(updatedWishList);
    }
  }

  setInitialWishList(): void {
    const wishList = JSON.parse(localStorage.getItem('wishlist'));
    if (wishList) this.myWishList$.next(wishList);
  }

  getWishList(): Observable<Book[]> {
    return this.myWishList$;
  }

  deleteFromWishList(bookTitle: string): void {
    const wishList = this.myWishList$.getValue();
    const updatedWishList = wishList.filter((book) => book.title !== bookTitle);
    this.updateWishList(updatedWishList);
  }

  getBooks(
    searchQuery: string,
    startIndex: string | number,
    maxResults: string = '20'
  ): Observable<BookData> {
    return this.http
      .get<BooksResponse>(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=${maxResults}&startIndex=${startIndex}`
      )
      .pipe(
        map((bookRes: any) => {
          const items = bookRes.items.map(
            (item: BookResponse) => item.volumeInfo
          );
          return { items, totalItems: bookRes.totalItems };
        })
      );
  }
}
