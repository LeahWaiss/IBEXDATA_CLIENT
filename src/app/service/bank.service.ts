import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bank } from '../Models/Bank.model';
import { BankNamesDTO } from '../Models/BankNamesDTO.model';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  
  BASE_URL = 'https://localhost:5178/api/Bank';

  https: HttpClient = inject(HttpClient);

  constructor() {}

  GetNames(): Observable<BankNamesDTO[]> {
    console.log(`${this.BASE_URL}/GetNames`);
    return this.https.get<BankNamesDTO[]>(`${this.BASE_URL}/GetNames`);
  }

  GetAll(): Observable<Bank[]> {
    console.log(`${this.BASE_URL}`);
    return this.https.get<Bank[]>(`${this.BASE_URL}`);
  }

}
  // GetByGift(name: string): Observable<Gift[]>{
  //   console.log(`${this.BASE_URL}GetByName`, name);
  //   return this.http.get<Gift[]>(`${this.BASE_URL}/GetByName?name=${name}`);
  // }



