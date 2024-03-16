import {LeaderboardItemType} from '@src/redux/reducers/leaderboard/types';

export interface LeaderboardItemProp {
  item: LeaderboardItemType;
  index?: number;
  onPress: (item: LeaderboardItemType) => void;
}
