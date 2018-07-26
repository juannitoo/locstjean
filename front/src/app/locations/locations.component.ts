import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationsService } from '../services/locations.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})

export class LocationsComponent implements OnInit, OnDestroy {

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

  ngOnDestroy() {
    this.locationsSubscription.unsubscribe();
  }


}
