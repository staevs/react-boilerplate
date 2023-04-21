import { useEffect, useState } from 'react';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel
} from '@chakra-ui/react';
import Select from 'react-select';

import { type Issue } from '~/api/api.types';
import { fetchIssues } from '~/api/fetchIssues';
import {
  type FormValues,
  LoadingState,
  type LoadingStates,
  type SetFormValue
} from '~/features/IssueForm/form.types';

export const IssueTypeField = ({
  selectedDepartment,
  selectedIssue,
  setValue
}: {
  selectedDepartment: NonNullable<FormValues['department']>;
  selectedIssue: FormValues['issue'];
  setValue: SetFormValue;
}) => {
  const [issues, setIssues] = useState<
    {
      label: string;
      value: Issue;
    }[]
  >([]);
  const [state, setState] = useState<LoadingStates>(LoadingState.IDLE);

  useEffect(() => {
    void (async () => {
      try {
        setState(LoadingState.LOADING);
        setValue({ issue: null, description: '' });
        const data = await fetchIssues(selectedDepartment.id);

        setIssues(data.map((issue) => ({ label: issue.label, value: issue })));

        setState(LoadingState.SUCCESS);
      } catch (e) {
        setState(LoadingState.ERROR);
        console.error(e);
      }
    })();
  }, [selectedDepartment, setValue]);

  return (
    <FormControl
      isRequired
      isInvalid={
        state === LoadingState.ERROR ||
        (state === LoadingState.SUCCESS && issues.length === 0)
      }
    >
      <FormLabel>Issue type</FormLabel>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isLoading={state === LoadingState.LOADING}
        isDisabled={issues.length === 0 || state === LoadingState.LOADING}
        isClearable
        isSearchable
        name="color"
        options={issues}
        onChange={(option) => {
          setValue({
            issue: option?.value || null,
            description: option?.value.template || ''
          });
        }}
        value={
          selectedIssue
            ? issues.find(({ value }) => selectedIssue.id === value.id)
            : null
        }
      />
      <FormErrorMessage>{`No issues for ${selectedDepartment.name}`}</FormErrorMessage>
      {!selectedIssue && <FormHelperText>Please, select issue.</FormHelperText>}
    </FormControl>
  );
};
