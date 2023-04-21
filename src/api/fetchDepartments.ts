import { type Department } from '~/api/api.types';

const getDefaultDepartments = (): Department[] => [
  { id: 1, name: 'APAC' },
  { id: 2, name: 'EMEA' },
  { id: 3, name: 'Global IT' },
  { id: 4, name: 'London HR' },
  { id: 5, name: 'London IT' }
];

export async function fetchDepartments() {
  return new Promise<Department[]>((resolve) => {
    setTimeout(() => {
      resolve(getDefaultDepartments());
    }, 2000);
  });
}
