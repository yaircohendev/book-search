import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Book } from '../../../../core/models/books.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistComponent implements OnInit {
  @Input() wishList: Book[];
  @Output() deleteFromWishList = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
