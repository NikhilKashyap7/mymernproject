import { configureStore } from "@reduxjs/toolkit";
import myactionlist from './Myaction';

export const store = configureStore ({
    reducer: {
        counter: myactionlist,
    },

})