export default () => ({
  container: {
    margin: '100px auto',
    width: '40px',
    height: '40px',
    position: 'relative',
  },
  item: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    '&:before': {
      content: '""',
      display: 'block',
      margin: '0 auto',
      width: '15%',
      height: '15%',
      backgroundColor: 'green',
      borderRadius: '100%',
      animation: 'sk-circleBounceDelay 1.2s infinite ease-in-out both',
    },
  },
  '@keyframes sk-circleBounceDelay': {
    '0%, 80%, 100%': {
      transform: 'scale(0)',
    },
    '40%': {
      transform: 'scale(1)',
    },
  },
  child2: {
    transform: 'rotate(30deg)',

    '&:before': {
      animationDelay: '-1.1s',
    },
  },
  child3: {
    transform: 'rotate(60deg)',

    '&:before': {
      animationDelay: '-1s',
    },
  },
  child4: {
    transform: 'rotate(90deg)',

    '&:before': {
      animationDelay: '-0.9s',
    },
  },
  child5: {
    transform: 'rotate(120deg)',

    '&:before': {
      animationDelay: '-0.8s',
    },
  },
  child6: {
    transform: 'rotate(150deg)',

    '&:before': {
      animationDelay: '-0.7s',
    },
  },
  child7: {
    transform: 'rotate(180deg)',

    '&:before': {
      animationDelay: '-0.6s',
    },
  },
  child8: {
    transform: 'rotate(210deg)',

    '&:before': {
      animationDelay: '-0.5s',
    },
  },
  child9: {
    transform: 'rotate(240deg)',

    '&:before': {
      animationDelay: '-0.4s',
    },
  },
  child10: {
    transform: 'rotate(270deg)',

    '&:before': {
      animationDelay: '-0.3s',
    },
  },
  child11: {
    transform: 'rotate(300deg)',

    '&:before': {
      animationDelay: '-0.2s',
    },
  },
  child12: {
    transform: 'rotate(330deg)',

    '&:before': {
      animationDelay: '-0.1s',
    },
  },
})
