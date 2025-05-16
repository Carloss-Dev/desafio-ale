import React from "react";
import { CardAsk } from "./components/CardAsk";
import { Box, Button } from "@chakra-ui/react";
import { CardForm } from "./components/CardForm";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch("http://admin.pedabete.app.br/api/faq");
      const json = await response.json();
      setData(json);
      console.log(json);
    }

    getData();
  }, []);

  function renderCard() {
    return data.map((item) => <CardAsk item={item} key={item.id} />);
  }

  return (
    <section className="main-page">
      <Box
        as="header"
        w="100vw"
        h="5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CardForm trigger={<Button>Criar</Button>} />
      </Box>
      {renderCard()}
    </section>
  );
}

export default App;
