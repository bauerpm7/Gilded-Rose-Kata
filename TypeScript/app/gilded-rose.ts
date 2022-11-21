import { ITEM_TYPES } from "./constants/item-types";
import {
  updateBrie,
  updateConjured,
  updateGeneric,
  updatePasses,
  updateSulfuras
} from './helpers'

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      switch (item.name) {
        case ITEM_TYPES.BRIE:
          updateBrie(item)
          break;
        case ITEM_TYPES.PASSES:
          updatePasses(item);
          break;
        case ITEM_TYPES.SULFURAS:
          updateSulfuras(item);
          break;
        case ITEM_TYPES.CONJURED:
          updateConjured(item);
          break;
        default:
          updateGeneric(item);
          break;
      }
    }) 

    return this.items;
  }
}
