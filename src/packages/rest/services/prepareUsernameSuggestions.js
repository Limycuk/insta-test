const calculateLabel = (label, startPosition, endPosition) => {
  if (startPosition === 0) {
    return [
      {
        isHighlighted: true,
        value: label.slice(0, endPosition),
      },
      {
        isHighlighted: false,
        value: label.slice(endPosition),
      },
    ];
  }

  if (endPosition - 1 === label.length) {
    return [
      {
        isHighlighted: false,
        value: label.slice(0, startPosition),
      },
      {
        isHighlighted: true,
        value: label.slice(startPosition),
      },
    ];
  }

  return [
    {
      isHighlighted: false,
      value: label.slice(0, startPosition),
    },
    {
      isHighlighted: true,
      value: label.slice(startPosition, endPosition),
    },
    {
      isHighlighted: false,
      value: label.slice(endPosition),
    },
  ];
};

export default (followers, value) => {
  const inputValue = value.trim().toLowerCase();
  let count = 0;
  let result = [];

  if (inputValue.length === 0) {
    return result;
  }

  for (let follower of followers) {
    if (count === 5) {
      break;
    }

    const startPosition = follower.username.toLowerCase().indexOf(inputValue);

    if (startPosition === -1) {
      continue;
    }

    count++;
    result = [
      ...result,
      {
        label: follower.username,
        splitedLabel: calculateLabel(follower.username, startPosition, startPosition + inputValue.length),
      },
    ];
  }

  return result;
};
