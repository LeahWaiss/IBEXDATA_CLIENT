// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Bank } from '../models/bank.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class BanksService {
//   private apiUrl = 'https://localhost:7140/api/Banks/GetBanks'; // עדכן את ה-URL ל-API שלך

//   constructor(private http: HttpClient) {}

//   getBank(): Observable<Bank[]> {
//     return this.http.get<Bank[]>(this.apiUrl);
//   }

//   deleteBank(id: number): Observable<Bank[]> {
//     return this.http.delete<Bank[]>(`${this.apiUrl}/${id}`);
//   }
//   update(item: Bank): Observable<Bank[]> {
//     return this.http.put<Bank[]>(this.apiUrl, item,);
// }

// }
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Bank } from '../models/bank.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class BanksService {
//   private apiUrl = 'https://localhost:7140/api/Banks/GetBanks'; // עדכן את ה-URL ל-API שלך

//   constructor(private http: HttpClient) {}

//   getBanks(): Observable<Bank[]> {
//     return this.http.get<Bank[]>(this.apiUrl);
//   }

//   deleteBank(id: number): Observable<Bank[]> {
//     return this.http.delete<Bank[]>(`${this.apiUrl}/${id}`);
//   }

//   updateBank(item: Bank): Observable<Bank[]> {
//     return this.http.put<Bank[]>(this.apiUrl, item);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bank } from '../Models/Bank.model';

@Injectable({
  providedIn: 'root'
})
export class BanksService {
  private apiUrl = 'https://localhost:7140/api/Banks/GetBanks'; // URL ל-GetBanks
  private apiUrlBase = 'https://localhost:7140/api/Banks'; // URL בסיסי ל-API

  constructor(private http: HttpClient) {}

  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.apiUrl);
  }

  deleteBank(id: number): Observable<void> { // שינוי סוג ההחזרה ל-void
    return this.http.delete<void>(`${this.apiUrlBase}/${id}`);
  }

  updateBank(bankId: number, bankText: string): Observable<Bank[]> {
    return this.http.put<Bank[]>(`${this.apiUrlBase}/${bankId}`, { bankText });
  }

  addBank(item: Bank): Observable<Bank[]> {
    console.log('Sending POST request with item:', item); // לוג נוסף לבדיקת הנתונים הנשלחים לשרת
    return this.http.post<Bank[]>(this.apiUrlBase, item);
  }
}