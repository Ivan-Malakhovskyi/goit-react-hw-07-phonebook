import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    MainBackgroundColor: '#f4f4fd',
    bgndBtnColor: ' #4d5ae5',
    btnHoverColor: '#2980b9',
    red: 'red',
    yellow: 'yellow',
    black: '#333',
    addBlack: '#111',
    white: '#FFFFFF',
    grey: ' #e7e9fc',
    addGrey: '#B4AFAF',
    paleGreen: '#98FB98',
    dodgerBlue: '#007bff',
    turquoise: 'turquoise',
    orange: 'orange',
    borderColor: '#ccc',
    borderListColor: '#4F2EE8',
    buttonDeleteColor: '#EAC645',
    FormFocusForm: 'rgba(77, 90, 229, 1)',
  },
  shadows: {
    boxShadow:
      '0px 1px 6px rgba(46, 47, 66, 0.08),0px 1px 1px rgba(46, 47, 66, 0.16),0px 2px 1px rgba(46, 47, 66, 0.08)',
    addBoxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px',
  },

  radii: {
    sm: '1px',
    md: '4px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);
