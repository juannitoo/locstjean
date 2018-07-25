import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../models/Location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {

  // @Input() index: number;
  // @Input() nbrePers: string;
  // @Input() id: number;
  // @Input() descriptionShort: string;
  // @Input() coordGeo: string;
  // @Input() source: string;

  location: Location;

  constructor(  ) {  }

  ngOnInit() {

  }

}
