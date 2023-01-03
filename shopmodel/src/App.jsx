import React, { Component } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import NoMatchPage from "./NoMatchPage";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <NavBar />
            <div className="container-fluid">
            <Routes>
            <Route path="/" exact element={<Login/>} />
            <Route path="/customers" exact element={<CustomersList/>} />
            <Route path="/cart" exact element={<ShoppingCart/>} />
            <Route path="*" element={<NoMatchPage/>} />
            </Routes>
            </div>
            </BrowserRouter>
        );
    }
}