module.exports = {
  'react/default-props-match-prop-types': [
    'error',
    { allowRequiredDefaults: true }
  ],
  'react/destructuring-assignment': [
    'error',
    'always',
    { ignoreClassFields: true }
  ],
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }
  ],
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  'react/jsx-fragments': 'error',
  'react/jsx-props-no-spreading': 'off',
  'react/no-find-dom-node': 'error',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
  'react/sort-comp': [
    'error',
    {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        '/^handle.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }
  ],
  'react/static-property-placement': 'off'
};
