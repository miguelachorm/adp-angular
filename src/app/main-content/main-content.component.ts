import { Component, OnInit } from '@angular/core';
import { MapsService } from '../services/maps.service';
import { Location } from '../models/location.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  lat: string = '';
  lng: string = '';

  location: Object;

  constructor(private mapsService: MapsService) { }

  ngOnInit() {

    this.mapsService.getGeoLocation().subscribe(
      (res: Location) => {
        this.lat = res.latitude;
        this.lng = res.longitude;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
