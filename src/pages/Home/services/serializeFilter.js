import { SORT_OPTIONS } from '../constants'

const mapSortValue = (value) => {
  const sortOption = SORT_OPTIONS.find((sortOption) => {
    return sortOption.value === value
  })

  if (sortOption) {
    return sortOption.label
  }

  return value
}

export default (filterName, filterValue) => {
  switch (filterName) {
    case 'likesFrom': {
      return {
        label: 'Лайков',
        sign: '>',
        value: filterValue,
        icon: 'thumb_up_alt',
      }
    }
    case 'likesTo': {
      return {
        label: 'Лайков',
        sign: '<',
        value: filterValue,
        icon: 'thumb_up_alt',
      }
    }
    case 'commentsFrom': {
      return {
        label: 'Комментариев',
        sign: '>',
        value: filterValue,
        icon: 'comment',
      }
    }
    case 'commentsTo': {
      return {
        label: 'Комментариев',
        sign: '<',
        value: filterValue,
        icon: 'comment',
      }
    }
    case 'followersFrom': {
      return {
        label: 'Подписчиков',
        sign: '>',
        value: filterValue,
        icon: 'person_add',
      }
    }
    case 'followersTo': {
      return {
        label: 'Подписчиков',
        sign: '<',
        value: filterValue,
        icon: 'person_add',
      }
    }
    case 'followingsFrom': {
      return {
        label: 'Подписок',
        sign: '<',
        value: filterValue,
        icon: 'mobile_friendly',
      }
    }
    case 'followingsTo': {
      return {
        label: 'Подписок',
        sign: '>',
        value: filterValue,
        icon: 'mobile_friendly',
      }
    }
    case 'postsFrom': {
      return {
        label: 'Постов',
        sign: '>',
        value: filterValue,
        icon: 'drafts',
      }
    }
    case 'postsTo': {
      return {
        label: 'Постов',
        sign: '<',
        value: filterValue,
        icon: 'drafts',
      }
    }
    case 'sort': {
      return {
        label: 'Сортировка',
        value: mapSortValue(filterValue),
        icon: 'sort_by_alpha',
      }
    }
    case 'username': {
      return {
        label: 'Ник',
        value: filterValue,
        icon: 'alternate_email',
      }
    }
  }
}
