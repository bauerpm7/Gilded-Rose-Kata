import { Item } from "../../gilded-rose";

export const updateConjured = (item: Item) => {
  item.sellIn -= 1;

  if (item.quality > 0) item.quality -= 2;
  if (item.quality > 0 && item.sellIn < 0) item.quality -= 2;

  // item quality can not go below 0
  if (item.quality < 0) item.quality = 0;

  return item;
};
