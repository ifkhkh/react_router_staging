import React from "react";
import {Test} from "./index";

const Error = function () {

    return (
        <div>404</div>
    )
}


const routeMap = [
    {
        path: '/',
        component: Test,
        exact: true,
    },
    {
        path: '/404',
        component: Error,
        exact: true,
    },

]

export default routeMap