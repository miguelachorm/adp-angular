import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiKeys } from 'src/config';
import { Location } from 'src/app/models/location.model';
import { map } from 'rxjs/operators';

// interface Location {
//   latitude: string;
//   longitude: string;
// }

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getGeoLocation() {
    return this.http.get<Location>(`http://api.ipapi.com/api/check?access_key=${ApiKeys.ipapiKey}`)
  }

}
