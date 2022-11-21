import { Item } from "../../gilded-rose";

export const updatePasses = (item: Item) => {
  if (item.quality < 50) item.quality += 1;
  if (item.sellIn <= 10 && item.quality < 50) item.quality += 1;
  if (item.sellIn <= 5 && item.quality < 50) item.quality += 1;

  item.sellIn -= 1;

  // if past sell by date stop here quality = 0
  if (item.sellIn < 0) item.quality = 0
 
  return item;
}
