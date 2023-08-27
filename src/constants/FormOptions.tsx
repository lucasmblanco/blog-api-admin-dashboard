import LogInForm from '@/containers/FormContainers/logInForm';
import SingUpForm from '@/containers/FormContainers/signUpForm';
import wavingHandEmoji from '../../public/waving_hand.svg';
import pointingDownEmoji from '../../public/pointing-down-emoji.svg';

export const LOG_IN_TEXT = 'Log In';
export const SIGN_UP_TEXT = 'Sign Up';

const LOG_IN_TEXT_COMPONENTS = {
  textButton: 'Log In',
  title: 'Welcome back!',
  loginPhrase: 'Already have an account?'
};

const SIGN_UP_TEXT_COMPONENTS = {
  textButton: 'Sign Up',
  title: 'Create your account here!',
  signupPhrase: "Don't have an account yet?"
};

type CurrentViewType = {
  [key: string]: {
    form: React.ReactNode;
    textButton: string;
    title: string;
    phrase: string;
    emoji: string;
  };
};

export const currentView: CurrentViewType = {
  login: {
    form: <LogInForm />,
    textButton: SIGN_UP_TEXT_COMPONENTS.textButton,
    title: LOG_IN_TEXT_COMPONENTS.title,
    phrase: SIGN_UP_TEXT_COMPONENTS.signupPhrase,
    emoji: wavingHandEmoji
  },
  signup: {
    form: <SingUpForm />,
    textButton: LOG_IN_TEXT_COMPONENTS.textButton,
    title: SIGN_UP_TEXT_COMPONENTS.title,
    phrase: LOG_IN_TEXT_COMPONENTS.loginPhrase,
    emoji: pointingDownEmoji
  }
};
