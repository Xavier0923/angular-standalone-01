import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { JsonService } from '../services/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, MatButtonModule, NavbarComponent],
})
export class AppComponent implements OnInit {
  constructor(private jsonService: JsonService) {}

  ngOnInit() {
    this.jsonService.getJson().subscribe((res) => console.log(res));
  }

  login() {}
}
