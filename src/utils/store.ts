import { StoreItem } from '../redux/reducers/store/types';

interface storeSortTypeResponse {
  pack: StoreItem[];
  single: StoreItem[];
}

export const sortStoreItemByPrice = (items: StoreItem[]) => {
  return items.sort((a, b) => a.amount - b.amount);
};

export const sortStoreByType = (items: StoreItem[]): storeSortTypeResponse => {
  const pack: StoreItem[] = [];
  const single: StoreItem[] = [];

  items.map(item => {
    if (item.type === 'SINGLE') {
      single.push(item);
    } else {
      pack.push(item);
    }
  });
  return {
    pack: sortStoreItemByPrice(pack),
    single: sortStoreItemByPrice(single),
  };
};
