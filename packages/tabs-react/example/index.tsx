import React from "react";
import ReactDOM from "react-dom";
import { Tabs } from "../src";
import "./tabs.scss";

const Tabbene = () => (
    <>
        <Tabs />
    </>
);

const mountNode = document.getElementById("app");
ReactDOM.render(<Tabbene />, mountNode);
