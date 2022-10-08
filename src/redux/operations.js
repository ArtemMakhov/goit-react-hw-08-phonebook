import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6340217bd1fcddf69cb1f949.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const res = await axios.get("/contacts");
        return res.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    };
}
);

export const addContact = createAsyncThunk("contacts/addContact", async ({name,phone},thunkAPI) => {
      try {
        const res = await axios.post("/contacts",{name,phone});
        return res.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    };  
})


