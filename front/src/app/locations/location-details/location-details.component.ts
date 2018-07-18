import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() index: number;
  @Input() nbrePers: string;
  @Input() id: string;
  @Input() description: string;
  @Input() coordGeo: string;
  @Input() source: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['locations']);
    console.log('click');
  }

}
