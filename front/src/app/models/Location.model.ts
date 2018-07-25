export class Location {
  constructor (
    public id: number,
    public pictures: any[],
    public nbrePers: string,
    public descriptionShort: any[],
    public description: string,
    public coordGeo: number[]
  ) {}
}
