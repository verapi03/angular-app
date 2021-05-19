import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technology } from '../models/technology.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_API_URL; // The URL to which the service will make the requests.
  constructor(private readonly _http: HttpClient) {}
  public getTechnologies() {
    return this._http.get<Technology[]>(this.baseUrl + "/technologies"); // We use the method get of the object httpClient to make a GET request to the API which will return an array of Technologies.
  }
  public getTechnology(id: string) {
    return this._http.get<Technology>(this.baseUrl + "/technology/" + id); // It's a good practice to use the notation generic (<type>) to specify the data type will be received from the API, which at the same time will be returned by this method.
  }
  public searchTechnology(query: string) {
    return this._http.get<Technology[]>(this.baseUrl + "/technology/search/" + query);
  }
}
