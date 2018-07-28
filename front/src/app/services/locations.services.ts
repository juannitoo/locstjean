import { Subject } from 'rxjs';
import { Location } from '../models/Location.model';

export class LocationsService {

  locationsSubject = new Subject<any[]>();

  private locations = [
    { id: 1,
      pictures: [ {src : '../assets/images/jon_photos/salon2_mini.jpg'},
                {src : 'src'},
                {src : 'src'},
                {src : 'src'},
                {src : 'src'},
                {src : 'src'},
              ],
      nbrePers: '2/3',
      descriptionShort : 'Appartement 1 chambre à Saint jean de luz',
      description: ' bla bla bla',
      coordGeo : [ 128, 223 ]
    },
    { id: 2,
      pictures: [ {src : '../assets/images/luis_photos/salonluis_mini.jpg'},
                {src : 'src'},
                {src : 'src'},
                {src : 'src'},
                {src : 'src'},
                {src : 'src'},
              ],
      nbrePers: '4/6',
      descriptionShort : 'Appartement 2 chambres à Ciboure',
      description: ' bla bla bla',
      coordGeo : [ 128, 223 ]
    },
    { id: 3,
      pictures: [ {src : '../assets/images/yves_photos/salonyves_mini.jpg'},
                {src : 'src'},
                {src : 'src'},
                {src : 'src'},
                {src : 'src'},
                {src : 'src'},
              ],
      nbrePers: '4/6',
      descriptionShort : 'Appartement 2 chambres à Ciboure',
      description: ' bla bla bla',
      coordGeo : [ 128, 223 ]
    }

  ];

  getLocationById(id: number) {
    const location = this.locations.find(
      (element) => {
        return element.id === id;
      }
    );
    return location;
  }

  getNewId() {
    const tableauId = [];
    let id;
    // je récupère les id des locations
    for (let i = 0; i < this.locations.length; i++) {
        tableauId.push(this.locations[i].id);
    }
    // et je les compare pour inclure les 1er dispo
    for (let i = 1; i <= this.locations.length + 1; i++) {
        if (tableauId.includes(i)) {
            continue;
        } else {
            id = i;
        }
    }
    return id;
  }

  setCoord() {
    return [152, 225];
  }

  setPictures(picture) {

  }

  emitLocationsSubject() {
    this.locationsSubject.next(this.locations.slice());
  }

  addLocation(location: Location) {
    this.locations.push(location);
    console.log(this.locations);
    this.emitLocationsSubject();
  }

}
