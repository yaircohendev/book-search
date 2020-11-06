import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBooksComponent {
  @Output() searchBook = new EventEmitter<string>();

  constructor() {}
}
