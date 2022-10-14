import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const res = await axios.get("/contacts");
        return res.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    };
}
);

export const addContact = createAsyncThunk("contacts/addContact", async ({ name, number }, thunkAPI) => {
    try {
        const res = await axios.post("/contacts", { name, number });
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