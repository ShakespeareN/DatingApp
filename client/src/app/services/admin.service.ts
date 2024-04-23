import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  basUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsersWithroles() {
    return this.http.get<User[]>(this.basUrl + 'admin/users-with-roles');
  }

  updateUserRoles(username: string, roles: string[]) {
    return this.http.post<string[]>(
      this.basUrl + 'admin/edit-roles/' + username + '?roles=' + roles,
      {}
    );
  }
}
