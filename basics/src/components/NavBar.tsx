import { Group, Button } from "@mantine/core";

function NavBar() {
    return (
        <Group>
            <Button variant="transparent" color="primary">
                Edit
            </Button>
            <Button variant="transparent" color="primary">
                Another
            </Button>
            <Button variant="transparent" color="primary">
                Another2
            </Button>
        </Group>
    );
}

export default NavBar;
