import { TYPE_MAPPER } from '../constants';

export default (type) => {
  return TYPE_MAPPER[type];
};
