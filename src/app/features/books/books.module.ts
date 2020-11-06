import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { BooksDisplayComponent } from './components/books-display/books-display.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BookDialogComponent } from './components/book-dialog/book-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
];

@NgModule({
  declarations: [
    BooksComponent,
    SearchBooksComponent,
    BooksDisplayComponent,
    BookDialogComponent,
    WishlistComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatDividerModule,
  ],
})
export class BooksModule {}
