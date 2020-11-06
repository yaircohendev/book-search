import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
