import { Item } from "../../gilded-rose";

export const updateBrie = (item: Item) => {
  item.sellIn -= 1;

  if (item.quality < 50) item.quality += 1;
  if (item.quality < 50 && item.sellIn < 0) item.quality += 1;

  return item;
};
