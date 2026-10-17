import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import './../styles/App.css';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: ''
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    }
  }
});

const { setName, setEmail } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

function UserInfoComponent() {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.user);

  return (
    <div>
      <h1>User Information</h1>
      <div>
        <label>Name: </label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => dispatch(setName(e.target.value))} 
        />
      </div>
      <div>
        <label>Email: </label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => dispatch(setEmail(e.target.value))} 
        />
      </div>
      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <div id="main">
        <UserInfoComponent />
      </div>
    </Provider>
  );
};

export default App;
