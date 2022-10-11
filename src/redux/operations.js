import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://6340217bd1fcddf69cb1f949.mockapi.io";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";



const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

/*
POST /users/signup
body: {name, email,password}
*/
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => { 
        try {
            const res = await axios.post("/users/signup", credentials)
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => { }
);



//-----------------------------------------------------//
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const res = await axios.get("/contacts");
        return res.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    };
}
);

export const addContact = createAsyncThunk("contacts/addContact", async ({ name, phone }, thunkAPI) => {
    try {
        const res = await axios.post("/contacts", { name, phone });
        return res.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    };
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const res = await axios.delete(`/contacts/${contactId}`);
        return res.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    };
});


