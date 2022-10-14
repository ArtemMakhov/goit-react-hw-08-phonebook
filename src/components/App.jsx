import { GlobalStyle } from "./GlobalStyle";
import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivatRoute } from "./PrivatRoute";

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <GlobalStyle/>
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
      </Routes></>
    ) 
  );
};
