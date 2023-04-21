import {
  type FormErrors,
  type FormValues
} from '~/features/IssueForm/form.types';

const isValidEmail = (input: string) =>
  /^[\w-\.]+@(?<domain>[\w-]+\.)+[\w-]{2,4}$/.test(input.trim());

export function validateForm(formValues: FormValues) {
  const errors: FormErrors = {};

  if (!formValues.department) {
    errors.department = 'Mandatory field';
  }

  if (!formValues.issue) {
    errors.issue = 'Mandatory field';
  }

  if (
    !formValues.description.trim() ||
    (formValues.issue?.template &&
      formValues.description.trim().length <= formValues.issue.template.length)
  ) {
    errors.description = 'Text cannot be empty.';
  }

  if (
    formValues.emails.trim() &&
    !formValues.emails.split(',').every(isValidEmail)
  ) {
    errors.emails = 'Some email addresses are incorrect';
  }

  return errors;
}
