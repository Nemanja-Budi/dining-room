import { Item } from "./item.model";

export class Menu {
    _id: number;
    restaurants: number;
    items: Item[];

    constructor(obj?: any) {
        this._id = obj && obj._id || 0;
        this.restaurants = obj && obj.restaurants || 0;
        this.items = obj && obj.items.map((item: any) => new Item(item)) || [];
    }
}