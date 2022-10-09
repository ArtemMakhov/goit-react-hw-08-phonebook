import { useDispatch } from "react-redux";
import { setFilter } from "redux/contactsSlice";
import { Label, Input, Text } from "./Filter.styled";

export const Filter = () => {
    const dispatch = useDispatch();
    
    const hangleFilter = e => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <Label>
            <Text>Find contacts by name</Text>
            <Input onChange={hangleFilter} type="text" name="filter" />
        </Label>
    );
};
