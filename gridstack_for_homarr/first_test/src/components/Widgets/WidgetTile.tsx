import React from "react";
import { WidgetData } from "../../types";
import { widgetStyles } from "./WidgetStyle";

interface WidgetProps {
    widget: WidgetData;
}

const WidgetTile: React.FC<WidgetProps> = ({ widget }) => {
    const { type, subreddit, section } = widget;

    return (
        <div style={widgetStyles}>
            <h6>{type}</h6>
            <p>{subreddit ? subreddit : section}</p>
        </div>
    );
};

export default WidgetTile;
