import { TestIds } from '~/shared/testids';

export const Component = () => (
  <div data-test-id={TestIds.SampleHome}>Sample Homepage</div>
);

Component.displayName = 'HomeRoute';
