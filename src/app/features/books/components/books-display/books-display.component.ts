import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Book, BookData } from '../../../../core/models/books.model';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';

@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksDisplayComponent {
  @Input() books: BookData;
  @Output() paginationClick = new EventEmitter<PageEvent>();
  constructor(public dialog: MatDialog) {}

  openBookDialog(book: Book): void {
    this.dialog.open(BookDialogComponent, {
      width: '80%',
      maxWidth: '600px',
      data: { book },
    });
  }
}
