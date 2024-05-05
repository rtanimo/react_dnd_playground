import { Box, SimpleGrid } from "@mantine/core";
import SingleCard from "./SingleCard";
import { useDrop } from "react-dnd";
import { useState } from "react";

const Board: React.FC = () => {
    const [cards, setCards] = useState([
        {
            id: "1",
        },
        {
            id: "2",
        },
        {
            id: "3",
        },
        {
            id: "4",
        },
        {
            id: "5",
        },
    ]);

    const moveCard = (dragIndex: number, hoverIndex: number) => {
        const dragCard = cards[dragIndex];
        const newCards = [...cards];
        newCards.splice(dragIndex, 1);
        newCards.splice(hoverIndex, 0, dragCard);
        setCards(newCards);
    };

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "CARD",
        drop: (item: { id: string; index: number }) =>
            moveCard(
                item.index,
                cards.findIndex((card) => card.id === item.id)
            ),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const style = {
        border: isOver ? "2px dashed blue" : "2px dashed transparent",
    };
    return (
        <Box ref={drop} style={style}>
            <SimpleGrid cols={6}>
                {cards.map((card, idx) => (
                    <SingleCard key={card.id} id={card.id} index={idx} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Board;
