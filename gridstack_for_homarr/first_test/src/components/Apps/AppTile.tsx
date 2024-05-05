import React from "react";
import { AppData } from "../../types";
import { appStyle } from "./Styles";

interface AppProps {
    app: AppData;
}

const AppTile: React.FC<AppProps> = ({ app }) => {
    const { name, address } = app;

    return (
        <div style={appStyle}>
            <h6>{name}</h6>
            <a href={address}>{address}</a>
        </div>
    );
};

export default AppTile;
