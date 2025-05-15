import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://api.example.com/data');
  }
  postData(data: any) {
    return this.http.post('https://api.example.com/data', data);
  }
  updateData(id: number, data: any) {
    return this.http.put(`https://api.example.com/data/${id}`, data);
  }
  deleteData(id: number) {
    return this.http.delete(`https://api.example.com/data/${id}`);
  }
}
