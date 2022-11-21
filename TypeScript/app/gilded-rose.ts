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

export enum ITEM_TYPES {
  BRIE = 'Aged Brie',
  PASSES ='Backstage passes to a TAFKAL80ETC concert',
  SULFURAS = 'Sulfuras, Hand of Ragnaros',
  CONJURED = 'Conjured',
  GENERIC = 'Generic'
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
          this.updateBrie(item)
          break;
        case ITEM_TYPES.PASSES:
          this.updatePasses(item);
          break;
        case ITEM_TYPES.SULFURAS:
          this.updateSulfuras(item);
          break;
        case ITEM_TYPES.CONJURED:
          this.updateConjured(item);
          break;
        default:
          this.updateGeneric(item);
          break;
      }
    }) 

    return this.items;
  }

  private updateGeneric (item: Item) {
    item.sellIn -= 1;
  
    if (item.quality > 0) item.quality -= 1;
    if (item.sellIn < 0 && item.quality > 0) item.quality -= 1;
  
    return item;
  };
  
  private updateBrie (item: Item) {
    item.sellIn -= 1;
  
    if (item.quality < 50) item.quality += 1;
    if (item.quality < 50 && item.sellIn < 0) item.quality += 1;
  
    return item;
  };


  private updatePasses = (item: Item) => {
    if (item.quality < 50) item.quality += 1;
    if (item.sellIn <= 10 && item.quality < 50) item.quality += 1;
    if (item.sellIn <= 5 && item.quality < 50) item.quality += 1;
  
    item.sellIn -= 1;
  
    // if past sell by date stop here quality = 0
    if (item.sellIn < 0) item.quality = 0;
   
    return item;
  }

  private updateSulfuras = (item: Item) => {
    // sulfuras quality and sellIn don't change
    return item;
  };

  private updateConjured = (item: Item) => {
    item.sellIn -= 1;
  
    if (item.quality > 0) item.quality -= 2;
    if (item.quality > 0 && item.sellIn < 0) item.quality -= 2;
  
    // item quality can not go below 0
    if (item.quality < 0) item.quality = 0;
  
    return item;
  };
}
