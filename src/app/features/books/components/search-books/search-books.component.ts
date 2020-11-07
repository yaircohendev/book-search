import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBooksComponent implements OnInit, OnDestroy {
  @Output() searchBook = new EventEmitter<string>();
  searchQuery$ = new Subject<string>();
  private ngUnsubscribe = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    this.searchQuery$
      .pipe(
        takeUntil(this.ngUnsubscribe),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((query) => {
        this.searchBook.emit(query);
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
