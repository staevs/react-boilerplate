import { type Department, type Issue } from '~/api/api.types';

export const LoadingState = {
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'succes'
} as const;

export type LoadingStates = (typeof LoadingState)[keyof typeof LoadingState];

export type FormValues = {
  department: Department | null;
  description: string;
  issue: Issue | null;
  emails: string;
};

export type FormErrors = { [key in keyof FormValues]?: string };

export type SetFormValue = (value: Partial<FormValues>) => void;
