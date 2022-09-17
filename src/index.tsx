import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import contributionDataReducer from './reducers/contributionDataReducer';
import personalDataReducer from './reducers/personalDataReducer';
import paymentReducer from './reducers/paymentReducer';

const store = configureStore({
  reducer: {
    contributionData: contributionDataReducer,
    personalData: personalDataReducer,
    payment: paymentReducer,
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
