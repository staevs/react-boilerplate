import { useEffect, useState } from 'react';

import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import Select from 'react-select';

import { type Department } from '~/api/api.types';
import { fetchDepartments } from '~/api/fetchDepartments';
import {
  type FormValues,
  LoadingState,
  type LoadingStates,
  type SetFormValue
} from '~/features/IssueForm/form.types';

export const DepartmentField = ({
  selectedDepartment,
  setValue
}: {
  selectedDepartment: FormValues['department'];
  setValue: SetFormValue;
}) => {
  const [departments, setDepartments] = useState<
    {
      label: string;
      value: Department;
    }[]
  >([]);
  const [state, setState] = useState<LoadingStates>(LoadingState.IDLE);

  useEffect(() => {
    void (async () => {
      try {
        setState(LoadingState.LOADING);
        const data = await fetchDepartments();

        setDepartments(
          data.map((department) => ({
            label: department.name,
            value: department
          }))
        );

        setState(LoadingState.SUCCESS);
      } catch (e) {
        setState(LoadingState.ERROR);
        console.error(e);
      }
    })();
  }, []);

  return (
    <FormControl isRequired>
      <FormLabel>Office/department</FormLabel>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isLoading={state === LoadingState.LOADING}
        isClearable
        isSearchable
        name="color"
        options={departments}
        onChange={(option) => {
          setValue({ department: option?.value || null });
        }}
        value={
          selectedDepartment
            ? departments.find(
                ({ value }) => selectedDepartment.id === value.id
              )
            : null
        }
      />
      {!selectedDepartment && (
        <FormHelperText>Please, select department.</FormHelperText>
      )}
    </FormControl>
  );
};
