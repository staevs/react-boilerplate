import { IssueForm } from '~/features/IssueForm/IssueForm';
import { TestIds } from '~/shared/testids';

export const Component = () => (
  <div data-test-id={TestIds.SampleHome}>
    <IssueForm />
  </div>
);

Component.displayName = 'HomeRoute';
