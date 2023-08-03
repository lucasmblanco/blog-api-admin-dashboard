export type formType = {
  selectedForm: 'login' | 'signup';
};

export type formActionType = {
  type: 'CHANGE_VIEW';
};

export const INITIAL_FORM: formType = {
  selectedForm: 'login'
};

export const reducer = (
  state: formType = INITIAL_FORM,
  action: formActionType
): formType => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return {
        selectedForm: state.selectedForm == 'login' ? 'signup' : 'login'
      };

    default:
      return state;
  }
};
