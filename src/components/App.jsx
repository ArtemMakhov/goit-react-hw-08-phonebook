
import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./Box";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
 
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="16px"
    >
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress ... </b>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Box>
  );
};
