import { Provider } from 'react-redux';
import { useAsync } from 'react-use';

import { AppRouter } from '~/router/AppRouter';
import { initI18n } from '~/services/i18n';
import { store } from '~/store/store';

export const App = () => {
  const i18nState = useAsync(() => initI18n());

  if (i18nState.loading) {
    return <p>Loading</p>;
  }

  if (i18nState.error) {
    return <div>i18n loading error: {i18nState.error.message}</div>;
  }

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
