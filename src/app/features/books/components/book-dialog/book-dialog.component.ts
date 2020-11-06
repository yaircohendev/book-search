import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Book } from '../../../../core/models/books.model';
import { BooksService } from '../../../../core/services/books.service';

interface DialogData {
  book: Book;
}

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private booksService: BooksService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addToWishList(): void {
    this.booksService.addToWishList(this.data.book);
    this.onNoClick();
  }
}
