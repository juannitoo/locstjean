import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '../../models/Location.model';
import { LocationsService } from '../../services/locations.services';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})
export class LocationAddComponent implements OnInit {

  locationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private locationsService: LocationsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.locationForm = this.formBuilder.group({
      nbrePers: '',
      descriptionShort: '',
      description: '',
      coordGeo: '',
      picture: []
    });
  }

  onSubmit() {
    const formValue = this.locationForm.value;
    const id = this.locationsService.getNewId();
    const coord = this.locationsService.setCoord();
    const pictures = { src: formValue['picture'] };
    const newLoc = new Location(
      id,
      formValue['nbrePers'],
      formValue['descriptionShort'],
      formValue['description'],
      coord,
      { 'src': formValue['picture'] }
    );
  }

}
