import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [MatToolbarModule],
  standalone: true,
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
