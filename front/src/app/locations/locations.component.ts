import { Component, OnInit, Input } from '@angular/core';
import { LocationsService } from '../services/locations.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})

export class LocationsComponent implements OnInit {

  locations: any[];
  locationsSubscription: Subscription;

  constructor(private locationsService: LocationsService) {
  }

  ngOnInit() {
    // this.locations = this.locationsService.locations;
    this.locationsSubscription = this.locationsService.locationsSubject.subscribe(
      (locations: any[] ) => {
        this.locations = locations;
      }
    );

    this.locationsService.emitLocationsSubject();
  }


}
