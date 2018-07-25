import { Component, OnInit, Input } from '@angular/core';
import { LocationsService } from '../services/locations.services';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})

export class LocationsComponent implements OnInit {

  locations: any[];

  constructor(private locationsService: LocationsService) {
  }

  ngOnInit() {
    this.locations = this.locationsService.locations;

  }


}
