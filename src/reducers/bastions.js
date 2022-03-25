export default function bastions(state = [], action) {
  switch (action.type) {
    case 'FETCH_BASTIONS_SUCCESS': 
      return action.bastions;
    case 'FETCH_BASTION_SUCCESS':
      return [action.bastion];
    case 'CREATE_BASTION_SUCCESS':
      return [...state, action.newBastion];
    case 'DELETE_BASTION_SUCCESS':
      return state.filter(bastion => bastion.name !== action.bastionName);
    default:
      return state;
  };
};