export interface StoreState {
  allItems: StoreItem[];
}

export interface StoreItem {
  name: string;
  amount: number;
  type: 'PACK' | 'SINGLE';
  benefits: Benefits[];
  color?: string;
  _id: string;
  is_ad?: boolean;
}

export enum StoreActions {
  UPDATE_ALL_ITEMS = 'UPDATE_ALL_ITEMS',
}

export interface Benefits {
  name: string;
  quantity: number;
  image: string;
  code: 'COIN' | 'DOUBLE' | 'PASS';
}
