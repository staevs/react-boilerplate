import { useCallback, useMemo, useState } from 'react';

import { Button, VStack } from '@chakra-ui/react';

import { DepartmentField } from '~/features/IssueForm/fields/DepartmentField';
import { EmailsField } from '~/features/IssueForm/fields/EmailsField';
import { IssueTypeField } from '~/features/IssueForm/fields/IssueTypeField';
import { TicketDescriptionField } from '~/features/IssueForm/fields/TicketDescriptionField';
import {
  type FormValues,
  type SetFormValue
} from '~/features/IssueForm/form.types';
import { validateForm } from '~/features/IssueForm/form.validators';

/**
 * That's just for completing the task. Normally such code should be significantly improved for usage in production
 * At least should be optimized rerenders for text input fields
 *
 * Normally for complex forms extra libraries would be used
 */

export const IssueForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    issue: null,
    department: null,
    description: '',
    emails: ''
  });
  const [touchedFields, setTouchedFields] = useState<Set<string>>(
    () => new Set()
  );

  const setValue: SetFormValue = useCallback((newFormValue) => {
    setFormValues((prevFields) => ({ ...prevFields, ...newFormValue }));
    setTouchedFields(
      (prevFields) =>
        new Set([...prevFields.values(), ...Object.keys(newFormValue)])
    );
  }, []);

  const errors = useMemo(() => validateForm(formValues), [formValues]);

  return (
    <VStack
      as="form"
      margin="auto"
      width="50vh"
      gap="10px"
      onSubmit={(event) => {
        event.preventDefault();
        console.debug(formValues);
      }}
    >
      <DepartmentField
        selectedDepartment={formValues.department}
        setValue={setValue}
      />
      {formValues.department && (
        <IssueTypeField
          selectedDepartment={formValues.department}
          selectedIssue={formValues.issue}
          setValue={setValue}
        />
      )}
      {formValues.issue && (
        <TicketDescriptionField
          selectedIssue={formValues.issue}
          selectedDescription={formValues.description}
          setValue={setValue}
          error={errors.description}
        />
      )}
      <EmailsField
        setValue={setValue}
        selectedEmails={formValues.emails}
        error={errors.emails}
      />
      <Button
        type="submit"
        colorScheme="green"
        isDisabled={touchedFields.size === 0 || Object.keys(errors).length > 0}
      >
        Submit
      </Button>
    </VStack>
  );
};
