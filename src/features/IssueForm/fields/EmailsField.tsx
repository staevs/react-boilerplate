import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input
} from '@chakra-ui/react';

import { type SetFormValue } from '~/features/IssueForm/form.types';

export const EmailsField = ({
  selectedEmails,
  setValue,
  error
}: {
  error?: string;
  selectedEmails: string;
  setValue: SetFormValue;
}) => (
  <FormControl isInvalid={!!error}>
    <FormLabel>CC Emails</FormLabel>
    <Input
      value={selectedEmails}
      onChange={({ target: { value } }) => setValue({ emails: value })}
    />
    <FormErrorMessage>{error}</FormErrorMessage>
    <FormHelperText>
      Send ticket updates to the following, comma-separated email addresses
    </FormHelperText>
  </FormControl>
);
