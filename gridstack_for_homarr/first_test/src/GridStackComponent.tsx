import React, { useEffect, useRef } from "react";
import "@homarr/gridstack/dist/gridstack.css"; // Import Gridstack CSS
import { GridStack, GridStackNode } from "@homarr/gridstack";
import { WidgetData, AppData } from "./types";

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

                    // Add widgets (optional)
                    addWidgets();

                    // Event handling (optional)
                    gridStackInstance.current.on("added", (event, items) => {
                        console.log("Widget added:", items);
                    });
                }
            };

            initializeGridstack();
        }
    }, []);

    const addWidgets = () => {
        // Add 5 widgets
        for (let i = 0; i < 5; i++) {
            const widgetOptions: GridStackNode = {
                x: i * 2,
                y: 0,
                w: 2,
                h: 2,
            };
            gridStackInstance.current?.addWidget(
                `<div class="grid-stack-item-content">Widget ${i + 1}</div>`,
                widgetOptions
            );
        }
    };

    return <div ref={gridRef} className="grid-stack"></div>;
};

export default GridStackComponent;
