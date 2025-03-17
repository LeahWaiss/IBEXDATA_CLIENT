import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
// import { RatesComponent } from './app/rates/rates.component';
// import { UsersComponent } from './app/users/users.component';
// import { ListContractorsComponent } from './components/list-contractors/list-contractors.component';
import { BankComponent } from './Component/bank/bank.component';
import { ProjectComponent } from './Component/project/project.component';
import { ApartmentComponent } from './Component/apartmentDetails/apartmentDetails.component';
import { FareComponent } from './Component/fare/fare.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bank', component: BankComponent },
  { path: 'apartmentDetails', component: ApartmentComponent },
   { path: 'project', component: ProjectComponent },
   { path: 'fare', component: FareComponent },
  // { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to home if no path is specified
];