import { LeaderboardItemType } from '../../redux/reducers/leaderboard/types';

export interface LeaderboardItemProp {
  item: LeaderboardItemType;
  index?: number;
  onPress: (item: LeaderboardItemType) => void;
}
