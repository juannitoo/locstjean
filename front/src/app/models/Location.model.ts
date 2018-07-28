export class Location {
  constructor (
    public id: number,
    public nbrePers: string,
    public descriptionShort: string,
    public description: string,
    public coordGeo: number[],
    public pictures: any
  ) {}
}
