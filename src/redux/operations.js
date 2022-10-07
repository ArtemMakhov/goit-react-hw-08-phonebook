import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6340217bd1fcddf69cb1f949.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
    const res = await axios.get("/contacts");
    return res.data;
});