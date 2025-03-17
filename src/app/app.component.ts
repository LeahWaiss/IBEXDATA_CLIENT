import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './Component/nav/nav.component';
import { ApartmentDetails } from './Models/apartmentDetails.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavComponent],
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}