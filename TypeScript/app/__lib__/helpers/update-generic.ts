import { Item } from "../../gilded-rose";

export const updateGeneric = (item: Item) => {
  item.sellIn -= 1;

  if (item.quality > 0) item.quality -= 1;
  if (item.sellIn < 0 && item.quality > 0) item.quality -= 1;

  return item;
};
