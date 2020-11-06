import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../core/services/books.service';
import { Observable } from 'rxjs';
import { Book, BookData } from '../../core/models/books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {
  name: string;
  books$: Observable<BookData>;
  searchQuery: string;
  wishList$: Observable<Book[]>;

  constructor(private router: Router, private booksService: BooksService) {}

  ngOnInit(): void {
    this.assignName();
    this.booksService.setInitialWishList();
    this.wishList$ = this.booksService.getWishList();
  }

  deleteFromWishList(bookTitle: string): void {
    this.booksService.deleteFromWishList(bookTitle);
  }

  assignName(): void {
    const name = localStorage.getItem('name');
    name ? (this.name = name) : this.router.navigate(['']).then((r) => r);
  }

  searchBookQuery(searchQuery: string, pageIndex = 0, pageSize = 20): void {
    if (!searchQuery) return;
    const startIndex = pageIndex * pageSize;
    this.searchQuery = searchQuery;
    this.books$ = this.booksService.getBooks(searchQuery, startIndex);
  }
}
