import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea
} from '@chakra-ui/react';

import {
  type FormValues,
  type SetFormValue
} from '~/features/IssueForm/form.types';

const MAX_LENGTH = 255;

export const TicketDescriptionField = ({
  selectedDescription,
  selectedIssue,
  setValue,
  error
}: {
  error?: string;
  selectedIssue: NonNullable<FormValues['issue']>;
  selectedDescription: FormValues['description'];
  setValue: SetFormValue;
}) => {
  const maxCharacters = selectedIssue.maxLength || MAX_LENGTH;

  return (
    <FormControl
      isRequired
      isInvalid={!!error}
    >
      <FormLabel htmlFor="description">Ticket Description</FormLabel>
      <Textarea
        id="description"
        value={selectedDescription}
        rows={5}
        overflowY="auto"
        maxLength={maxCharacters}
        resize="none"
        onChange={({ target: { value } }) => {
          setValue({ description: value });
        }}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
      {selectedIssue.template && (
        <FormHelperText>
          Please provide as many details as per provided template.
        </FormHelperText>
      )}
      <FormHelperText>{`Characters left: ${
        maxCharacters - selectedDescription.length
      }`}</FormHelperText>
    </FormControl>
  );
};
