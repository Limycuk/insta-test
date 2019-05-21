export const NAMESPACE = 'DATA_FILTERS::';

export const EXISTED_DATES = [
  {
    value: '2019-01-30',
    label: '30/01/2019',
  },
  {
    value: '2019-05-15',
    label: '15/05/2019',
  },
];

export const SINGLE_TYPE = 'single';
export const NEW_FOLLOWERS_TYPE = 'new_followers';
export const OLD_FOLLOWERS_TYPE = 'old_followers';

export const TWO_DATES_TYPES = [NEW_FOLLOWERS_TYPE, OLD_FOLLOWERS_TYPE];

export const EXISTED_TYPES = [
  {
    label: 'Точная дата',
    value: SINGLE_TYPE,
  },
  {
    label: 'Новые подписчики',
    value: NEW_FOLLOWERS_TYPE,
  },
  {
    label: 'Прежние подписчики',
    value: OLD_FOLLOWERS_TYPE,
  },
];
