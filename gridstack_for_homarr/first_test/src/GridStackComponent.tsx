import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom"; // Import ReactDOM
import "@homarr/gridstack/dist/gridstack.css"; // Import Gridstack CSS
import { GridStack, GridStackNode } from "@homarr/gridstack";
import { WidgetData, AppData } from "./types";
import AppTile from "./components/Apps/AppTile";
import WidgetTile from "./components/Widgets/WidgetTile";

interface GridStackProps {
    widgets?: WidgetData[];
    apps?: AppData[];
}

const GridStackComponent: React.FC<GridStackProps> = ({ widgets, apps }) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const gridStackInstance = useRef<GridStack | null>(null);

    useEffect(() => {
        if (gridRef.current) {
            const initializeGridstack = async () => {
                // Wait for the container to be rendered
                await new Promise((resolve) => setTimeout(resolve, 0));

                // Check if the container is still available
                if (gridRef.current) {
                    // Initialize Gridstack
                    gridStackInstance.current = new GridStack(gridRef.current);

                    // Clear the gridstack if it already exists
                    if (gridRef.current && gridStackInstance.current) {
                        // clear the gridstack
                        gridStackInstance.current.removeAll();
                    }

                    // add user apps
                    apps?.forEach((app, idx) => {
                        const appTileElement = document.createElement("div");
                        const appTile = <AppTile key={idx} app={app} />;
                        ReactDOM.render(appTile, appTileElement);
                        const widgetOptions: GridStackNode = {
                            x: idx * 2,
                            y: 0,
                            w: 2,
                            h: 2,
                        };
                        gridStackInstance.current?.addWidget(
                            appTileElement,
                            widgetOptions
                        );
                    });

                    // add user apps
                    widgets?.forEach((widget, idx) => {
                        const widgetTileElement = document.createElement("div");
                        const widgetTile = (
                            <WidgetTile key={idx} widget={widget} />
                        );
                        ReactDOM.render(widgetTile, widgetTileElement);
                        const widgetOptions: GridStackNode = {
                            x: idx * 2,
                            y: 0,
                            w: 2,
                            h: 2,
                        };
                        gridStackInstance.current?.addWidget(
                            widgetTileElement,
                            widgetOptions
                        );
                    });

                    // // Add widgets (optional)
                    // addWidgets();

                    // // Event handling (optional)
                    // gridStackInstance.current.on("added", (event, items) => {
                    //     console.log("Widget added:", items);
                    // });
                }
            };

            initializeGridstack();
        }
    }, [apps, widgets]);

    // const addWidgets = () => {
    //     // Add 5 widgets
    //     for (let i = 0; i < 5; i++) {
    //         const widgetOptions: GridStackNode = {
    //             x: i * 2,
    //             y: 0,
    //             w: 2,
    //             h: 2,
    //         };
    //         gridStackInstance.current?.addWidget(
    //             `<div class="grid-stack-item-content">Widget ${i + 1}</div>`,
    //             widgetOptions
    //         );
    //     }
    // };

    return <div ref={gridRef} className="grid-stack"></div>;
};

export default GridStackComponent;
