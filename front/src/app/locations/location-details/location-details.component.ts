import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from '../../services/locations.services';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})

export class LocationDetailsComponent implements OnInit {

  paramId: number;
  id: number;
  description: string;
  coordGeo: any[];
  source: string;
  nbrePers: string;

  constructor(private locationsService: LocationsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramId =  this.route.snapshot.params['id'];
    this.id = this.locationsService.getLocationById(+this.paramId).id;
    this.description = this.locationsService.getLocationById(+this.paramId).description;
    this.coordGeo = this.locationsService.getLocationById(+this.paramId).coordGeo;
    this.source = this.locationsService.getLocationById(+this.paramId).pictures[0].src;
    this.nbrePers = this.locationsService.getLocationById(+this.paramId).nbrePers;
  }

}
