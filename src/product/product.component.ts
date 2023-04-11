import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../directive/highlight.directive';
import { MoneyPipe } from '../pipe/money.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [HighlightDirective, MoneyPipe],
  standalone: true,
})
export class ProductComponent implements OnInit {
  num: number = 1000;
  constructor() {}

  ngOnInit() {}
}
