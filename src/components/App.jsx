
// import { GlobalStyle } from "./GlobalStyle";
import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
// import { Box } from "./Box";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { Filter } from "./Filter/Filter";
// import { ContactList } from "./ContactList/ContactList";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";

import { RestrictedRoute } from "./RestrictedRoute";
import { PrivatRoute } from "./PrivatRoute";
// import { fetchContacts } from "redux/operations";
// import { selectError, selectIsLoading } from "redux/selectors";


const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
 
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />}
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />}
          />
          <Route
            path="/contacts"
            element={<PrivatRoute component={ContactsPage} redirectTo="/login" />}
          />
      </Route>
    </Routes>
    )
    
    
    // <Box
    //   display="flex"
    //   flexDirection="column"
    //   alignItems="center"
    //   p="16px"
    // >

    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   {isLoading && !error && <b>Request in progress ... </b>}
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    //   <GlobalStyle />
    // </Box>
  );
};
