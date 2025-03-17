import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fare } from '../Models/fare.model';

@Injectable({
  providedIn: 'root',
})
export class FareService {

  private apiUrl = 'https://localhost:7140/api/Fare/GetFare'; // עדכן את ה-URL ל-API שלך
  private apiUrlBase = 'https://localhost:7140/api/Fare'; // URL בסיסי ל-API

  constructor(private http: HttpClient) {}

  getFares(): Observable<Fare[]> {
    return this.http.get<Fare[]>(this.apiUrl);
  }

  deleteFare(id: number): Observable<Fare[]> {
    return this.http.delete<Fare[]>(`${this.apiUrlBase}/${id}`);
  }

  addFare(item: Fare): Observable<Fare[]> {
    console.log('Sending POST request with item:', item); // Add a log to check if the function is called multiple times
    return this.http.post<Fare[]>(this.apiUrlBase, item);
  }

  updateFareAmount(fareId: number, fareAmount: number): Observable<Fare[]> {
    return this.http.put<Fare[]>(`${this.apiUrlBase}/${fareId}/amount`, { fareAmount });
  }
}