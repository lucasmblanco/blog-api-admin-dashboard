export type SubmitFunction = (e: React.ChangeEvent<HTMLFormElement>) => void;

export type ActionType = {
  type: 'SET_USER_LOG_IN' | 'LOG_OUT_USER' | 'SET_USER_LOCAL';
  payload?: UserType;
};

export type UserType = {
  username: string | undefined;
};

export type FormActionType = {
  type:
    | 'CHANGE_VIEW'
    | 'CHANGE_VIEW_FROM_SIGNUP'
    | 'CLEAN_EMPTY_INPUT_FIELDS'
    | 'ADD_EMPTY_INPUT_FIELD';
  payload?: 'username' | 'password';
};

export type ResponseError = { error: string };

export type ApiResponse = {
  code: number;
  message: string;
  user: UserType;
  errors?: ResponseError[];
};

export type PostComponentType = {
  id: string;
  title: string;
  body: string;
  timestamp: string;
  published: boolean;
};

export type DialogComponentType = {
  isDialogOpen?: boolean;
  currentView: string;
};

export type ApiError = {
  error: string;
};
