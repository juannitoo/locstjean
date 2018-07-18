import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {

  @Input() index: number;
  @Input() nbrePers: string;
  @Input() id: number;
  @Input() descriptionShort: string;
  @Input() coordGeo: string;
  @Input() source: string;
  idArecup: string;


  constructor( private route: ActivatedRoute ) {  }

  ngOnInit() {
    this.idArecup = this.route.snapshot.params['id'];
  }


}
