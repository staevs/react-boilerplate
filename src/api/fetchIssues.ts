import { type Department, type Issue } from '~/api/api.types';

function getMockedIssues(departmentId: Department['id']): Issue[] {
  switch (departmentId) {
    case 1:
      return [
        {
          id: 1,
          label: 'Some Apac Issue 1'
        },
        {
          id: 2,
          label: 'Some Apac Issue 2',
          maxLength: 100
        },
        {
          id: 3,
          label: 'Some Apac Issue 3'
        }
      ];
    case 2:
      return [
        {
          id: 4,
          label: 'Some EMEA Issue 1'
        },
        {
          id: 5,
          label: 'Some EMEA Issue 2'
        }
      ];
    case 3:
      return [
        {
          id: 6,
          label: 'Locked account',
          template: 'Account id:',
          maxLength: 15
        },
        {
          id: 7,
          label: 'Laptop issue',
          template: 'Laptop model:\nLaptop serial number:\nIssue description:'
        },
        {
          id: 8,
          label: 'Teams access'
        }
      ];
    default:
      return [];
  }
}

export async function fetchIssues(departmentId: Department['id']) {
  return new Promise<Issue[]>((resolve) => {
    setTimeout(() => {
      resolve(getMockedIssues(departmentId));
    }, 2000);
  });
}
