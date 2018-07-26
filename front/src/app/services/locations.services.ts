import { Subject } from 'rxjs/Subject';

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

}
