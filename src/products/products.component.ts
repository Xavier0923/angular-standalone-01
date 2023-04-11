import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JsonService } from '../services/json.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [RouterModule],
  standalone: true,
})
export class ProductsComponent implements OnInit {
  constructor(private jsonService: JsonService) {}

  ngOnInit() {
    this.jsonService.getJson().subscribe((res) => console.log(res));
  }
}
