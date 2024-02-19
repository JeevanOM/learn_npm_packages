const operatorConfig = ['plus', 'minus', 'multiply', 'divide', 'expo'];

const evaluateFunction = (a, b, operator) => {
  let isError = false;
  let value;
  switch (operator) {
    case 'plus':
      value = a + b;
      break;
    case 'minus':
      value = a - b;
      break;
    case 'multiply':
      value = a * b;
      break;
    case 'divide':
      if (b != 0) {
        value = a / b;
      } else {
        isError = true;
        value = 'Cannot divide by 0';
      }
      break;
    case 'expo':
    default:
      value = Math.pow(a, b);
  }
  return {
    isError,
    value,
  };
};

const assignment = (params, operator) => {
  let isError = true;
  if (!operatorConfig.includes(operator)) {
    return {
      isError,
      value: 'Invalid operation',
    };
  }
  const a = parseInt(params.a, 10);
  const b = parseInt(params.b, 10);

  if (isNaN(a) || isNaN(b)) {
    return {
      isError,
      value: 'Please pass numbers to operate',
    };
  }

  return evaluateFunction(a, b, operator);
};

export default assignment;
