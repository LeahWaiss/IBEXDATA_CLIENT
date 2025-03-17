import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bank } from '../Models/Bank.model';
import { BankNamesDTO } from '../Models/BankNamesDTO.model';
import { ApartmentDetails } from '../Models/apartmentDetails.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentDetailsService {
  
  BASE_URL = 'https://localhost:7140/api/ApartmentDetails/GetApartmentsByBuilding';
  BASE_URL1 = 'https://localhost:7140/api/ApartmentDetails/GetWarehousesByBuilding';
  BASE_URL2 = 'https://localhost:7140/api/ApartmentDetails/GetParkingByBuilding';
  BASE_URL3 ='https://localhost:7140/api/ApartmentDetails/GetLinkagCode'
  https: HttpClient = inject(HttpClient);

  constructor() {}

  // GetNames(): Observable<ApartmentDetails[]> {
  //   console.log(`${this.BASE_URL}/GetNames`);
  //   return this.https.get<ApartmentDetails[]>(`${this.BASE_URL}/GetNames`);
  // }

  GetApartmentsByBuilding(): Observable<ApartmentDetails[]> {
    console.log(`${this.BASE_URL}`);
    return this.https.get<ApartmentDetails[]>(`${this.BASE_URL}`);
  }
  GetWarehousesByBuilding(): Observable<ApartmentDetails[]> {
    console.log(`${this.BASE_URL1}`);
    return this.https.get<ApartmentDetails[]>(`${this.BASE_URL1}`);
  }
  GetParkingByBuilding(): Observable<ApartmentDetails[]> {
    console.log(`${this.BASE_URL1}`);
    return this.https.get<ApartmentDetails[]>(`${this.BASE_URL1}`);
  }
  GetLinkagCode(): Observable<ApartmentDetails[]> {
    console.log(`${this.BASE_URL1}`);
    return this.https.get<ApartmentDetails[]>(`${this.BASE_URL1}`);
  }
}