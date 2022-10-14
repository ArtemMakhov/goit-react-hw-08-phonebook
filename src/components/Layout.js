import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";
import { Box } from "./Box";

export const Layout = () => {
    return (
            <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="16px"
    >
        <AppBar />
        <Suspense fallback={null}>
                <Outlet/>
        </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </Box>
    )
}