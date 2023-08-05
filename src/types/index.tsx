export type SubmitFunction = (e: React.ChangeEvent<HTMLFormElement>) => void;

export type ActionType = {
  type: 'SET_USER' | 'LOG_OUT_USER';
  payload?: UserType;
};

export type UserType = {
  username: string;
};

export type FormActionType = {
  type: 'CHANGE_VIEW' | 'CHANGE_VIEW_FROM_SIGNUP';
};

export type ResponseError = { error: string };

export type ApiResponse = {
  code: number;
  message: string;
  user?: UserType;
  errors?: ResponseError[];
};
