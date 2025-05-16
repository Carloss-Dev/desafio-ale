import { Box, Button, Card, Collapsible } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

export const CardAsk = ({ item }) => {
  return (
    <Card.Root width="320px" key={item.id}>
      <Card.Body gap="2">
        <Card.Title mt="2">{item.author}</Card.Title>
        <Card.Description as="div" padding="1">
          <Collapsible.Root>
            <Collapsible.Trigger display="flex" alignItems="center">
              {item.question} <IoIosArrowDown style={{ fontSize: "24px" }} />
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Box padding="4" borderWidth="1px">
                {item.answer}
              </Box>
            </Collapsible.Content>
          </Collapsible.Root>
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer>
    </Card.Root>
  );
};
