import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
