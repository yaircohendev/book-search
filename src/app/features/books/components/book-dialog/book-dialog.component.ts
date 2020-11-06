import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
