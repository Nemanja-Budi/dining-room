import { Days } from "./days.model";

export class Restoran {
    name:string;
    cuisine: string;
     _id: number;
    description: string;
    location: string;
    price: number;
    days: Days;
    rating: number;

    constructor(obj?: any) {
        this.name = obj && obj.name || '';
        this.cuisine = obj && obj.cuisine || '';
        this._id = obj && obj._id || 0;
        this.description = obj && obj.description || '';
        this.location = obj && obj.location || '';
        this.price = obj && obj.price || 0;
        this.days = obj && new Days(obj.days) || new Days();
        this.rating = obj && obj.rating || 0;
     }
}
        
