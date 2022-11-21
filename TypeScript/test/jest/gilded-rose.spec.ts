import { Item, GildedRose } from '@/gilded-rose';
import { ITEM_TYPES } from '@/__lib__/constants/item-types';

describe('Gilded Rose', () => {
  const qualitiesToTest = [
    0, 1, 6, 12, 50
  ]
  
  const sellInValuesToTest = [
    -1, 0, 5, 6, 10, 11
  ]
  describe('update quality for Generic Item', () => {
    qualitiesToTest.forEach(quality => {
      sellInValuesToTest.forEach(sellIn => {
        it(`updates generic item quality correctly with name ${ITEM_TYPES.GENERIC}, quality: ${quality}, sellin: ${sellIn}`, () => {
          const item = new Item(ITEM_TYPES.GENERIC, sellIn, quality)
          const gildedRose = new GildedRose([item]);
          const items = gildedRose.updateQuality();
          expect(items[0].sellIn).toEqual(sellIn - 1);
          if (sellIn > 0) {
            if(quality >= 1) expect(items[0].quality).toEqual(quality - 1);
            if(quality <= 0) expect(items[0].quality).toEqual(0);
          };
          if (sellIn <= 0) {
            if(quality >= 2) expect(items[0].quality).toEqual(quality - 2);
            if(quality < 2) expect(items[0].quality).toEqual(0);
          };
        });
      });
    });
  });
  describe('update quality for Brie', () => {
    qualitiesToTest.forEach(quality => {
      sellInValuesToTest.forEach(sellIn => {
        it(`updates Brie quality correctly with name ${ITEM_TYPES.BRIE}, quality: ${quality}, sellin: ${sellIn}`, () => {
          const item = new Item(ITEM_TYPES.BRIE, sellIn, quality)
          const gildedRose = new GildedRose([item]);
          const items = gildedRose.updateQuality();
          expect(items[0].sellIn).toEqual(sellIn - 1);
          if (sellIn > 0) {
            if(quality < 50) expect(items[0].quality).toEqual(quality + 1);
            if(quality >= 50) expect(items[0].quality).toEqual(50);
          };
          if (sellIn <= 0) {
            if(quality < 48) expect(items[0].quality).toEqual(quality + 2);
            if(quality >= 48) expect(items[0].quality).toEqual(50);
          };
        });
      });
    });
  });
  describe(`update quality for ${ITEM_TYPES.PASSES}`, () => {
    qualitiesToTest.forEach(quality => {
      sellInValuesToTest.forEach(sellIn => {
        it(`updates generic item quality correctly with name ${ITEM_TYPES.PASSES}, quality: ${quality}, sellin: ${sellIn}`, () => {
          const item = new Item(ITEM_TYPES.PASSES, sellIn, quality)
          const gildedRose = new GildedRose([item]);
          const items = gildedRose.updateQuality();
          expect(items[0].sellIn).toEqual(sellIn - 1);
          if (sellIn <= 0) expect(items[0].quality).toEqual(0)
          if (sellIn > 10) {
            if (quality < 50) {
              expect(items[0].quality).toEqual(quality + 1);
            } else {
              expect(items[0].quality).toEqual(50);
            }
          }
          if (sellIn >= 6  && sellIn < 11 ) {
            if (quality < 49) {
              expect(items[0].quality).toEqual(quality + 2);
            } else {
              expect(items[0].quality).toEqual(50);
            }
          }
          if (sellIn > 0 && sellIn < 6) {
            if (quality < 48) {
              expect(items[0].quality).toEqual(quality + 3);
            } else {
              expect(items[0].quality).toEqual(50);
            }
          }
        });
      });
    });
  });
  describe(`update quality for ${ITEM_TYPES.SULFURAS}`, () => {
    sellInValuesToTest.forEach(sellIn => {
        it(`updates Sulfuras quality correctly with name ${ITEM_TYPES.SULFURAS}, quality: 80, sellin: ${sellIn}`, () => {
          const item = new Item(ITEM_TYPES.SULFURAS, sellIn , 80);
          const gildedRose = new GildedRose([item]);
          const items = gildedRose.updateQuality();
          expect(items[0].sellIn).toEqual(sellIn);
          expect(items[0].quality).toEqual(80);
        });
    });
  });
  describe(`update quality for Conjured Item`, () => {
    qualitiesToTest.forEach(quality => {
      sellInValuesToTest.forEach(sellIn => {
        it(`updates generic item quality correctly with name ${ITEM_TYPES.CONJURED}, quality: ${quality}, sellin: ${sellIn}`, () => {
          const item = new Item(ITEM_TYPES.CONJURED, sellIn, quality)
          const gildedRose = new GildedRose([item]);
          const items = gildedRose.updateQuality();
          expect(items[0].sellIn).toEqual(sellIn - 1);
          if (sellIn > 0) {
            if(quality >= 2) expect(items[0].quality).toEqual(quality - 2);
            if(quality <= 0) expect(items[0].quality).toEqual(0);
          };
          if (sellIn <= 0) {
            if(quality >= 4) expect(items[0].quality).toEqual(quality - 4);
            if(quality < 4) expect(items[0].quality).toEqual(0);
          };
        });
      });
    });
  });
});
