import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from 'src/app/shared/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private _httpClient: HttpClient) { }

getAllproject(): Observable<IApiResponse> {
    return this._httpClient.get(environment.API_URL + '/api/v1/project/all') as Observable<IApiResponse>;
  }

  addProject(project): Observable<IApiResponse> {
    return this._httpClient.post(environment.API_URL + '/api/v1/project/send', project) as Observable<IApiResponse>;
  }
  deleteproject(id): Observable<IApiResponse> {
    return this._httpClient.delete(environment.API_URL + `/api/v1/project/delete/${id}`) as Observable<IApiResponse>;
  }
  
}