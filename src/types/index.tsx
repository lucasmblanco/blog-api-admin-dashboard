export type SubmitFunction = (e: React.ChangeEvent<HTMLFormElement>) => void;

export type ActionType = {
  type: 'SET_USER_LOG_IN' | 'LOG_OUT_USER' | 'SET_USER_LOCAL';
  payload: UserType;
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
  user: UserType;
  errors?: ResponseError[];
};

export type PostComponentType = {
  title: string | undefined;
  body: string | undefined;
  isDialogOpen?: boolean;
  currentView?: string;
};
