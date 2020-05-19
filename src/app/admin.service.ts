import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = "http://localhost:9090/admin/getAdmin";

  constructor(private http: HttpClient, private router: Router) { }

  searchAdmin(id: Number): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`,admin);
  }

  updateAdmin(admin: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/`, admin);
  }

  deleteAdmin(id: Number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getAdminList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
