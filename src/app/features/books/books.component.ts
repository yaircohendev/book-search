import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements OnInit {
  name: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.assignName();
  }

  assignName(): void {
    const name = localStorage.getItem('name');
    name ? this.name = name : this.router.navigate(['']).then(r => r);
  }

}
