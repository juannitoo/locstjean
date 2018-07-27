export class Location {
  constructor (
    public id: number,
    public pictures: any[],
    public nbrePers: string,
    public descriptionShort: string,
    public description: string,
    public coordGeo: number[]
  ) {}
}
