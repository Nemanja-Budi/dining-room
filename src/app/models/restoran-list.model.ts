import { Restoran } from "./restoran.model";

export class RestoranList {
    count: number;
    results: Restoran[];

    constructor(obj?: any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results.map((restoran:any) => new Restoran(restoran)) || [];
    }
}