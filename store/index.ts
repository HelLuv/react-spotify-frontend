import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {createStore} from "redux";
import {reducer,  RootState} from "./reducers";

// @ts-ignore
const makeStore:MakeStore<RootState> = (context:Context)=>createStore(reducer);

// @ts-ignore
export const wrapper =createWrapper<RootState>(makeStore,{debug:true});