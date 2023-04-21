import {
  type FormErrors,
  type FormValues
} from '~/features/IssueForm/form.types';

const isValidEmail = (input: string) =>
  /^[\w-\.]+@(?<domain>[\w-]+\.)+[\w-]{2,4}$/.test(input.trim());

const isValidCCEmails = (emails: string) =>
  !emails.trim() || emails.split(',').every(isValidEmail);

const isValidDescription = (description: string, template = '') =>
  description.trim().length > template.length;

export function validateForm(formValues: FormValues) {
  const errors: FormErrors = {};

  if (!formValues.department) {
    errors.department = 'Mandatory field';
  }

  if (!formValues.issue) {
    errors.issue = 'Mandatory field';
  }

  if (!isValidDescription(formValues.description, formValues.issue?.template)) {
    errors.description = 'Text cannot be empty.';
  }

  if (!isValidCCEmails(formValues.emails)) {
    errors.emails = 'Some email addresses are incorrect';
  }

  return errors;
}
