const Reducer = (state = '', action) => {
  switch(action.type) {
    case '0':
      return state + '0';
    case '1':
      return state + '1';
    case '2':
      return state + '2';
    case '3':
      return state + '3';
    case '4':
      return state + '4';
    case '5':
      return state + '5';
    case '6':
      return state + '6';
    case '7':
      return state + '7';
    case '8':
      return state + '8';
    case '9':
      return state + '9';
    case 'ADD':
      return state + '+';
    case 'SUB':
      return state + '-';
    case 'MULTI':
      return state + '*';
    case 'DIVID':
      return state + '/';
    case 'TOTAL':
      return eval(state);
    default:
      return state;
  }
}

export default Reducer;