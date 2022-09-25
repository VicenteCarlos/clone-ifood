import { Flex, Box, Input } from "@chakra-ui/react";
import { pedidosMocks, pizzaMocks } from "../../../../assets/mocks";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { IPizzaMocks } from "../../../../assets/mocks/interfaces";
import { Pedidos } from "./components/Pedidos";

const Main = () => {
  const [search, setSearch] = useState<string>("");
  const filteredProducts: any = pedidosMocks.filter((item) =>
    item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  console.log(filteredProducts);
  return (
    <main>
      <Flex>
        {pizzaMocks.map((item, i) => (
          <img
            key={i}
            style={{
              margin: "20px auto",
              borderRadius: "10px",
              borderBottom: "3px solid #ff0000",
              width: "30vw",
              height: "250px",
              boxShadow: "2px 2px 2px 2px",
            }}
            src={item}
            alt="pizza"
          />
        ))}
      </Flex>
      <Flex alignItems="center" marginLeft="30px" marginTop="50px">
        <img
          src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/1be2cf97-b761-4975-81a7-871c44ce9af0/202009032011_F3Bn_i.png"
          alt="specially"
        />
        <h2
          style={{
            marginLeft: "20px",
            fontSize: "32px",
            fontFamily: "cursive",
          }}
        >
          Specially Pizzaria Artesanal
        </h2>
      </Flex>
      <Flex
        justifyContent="flex-start"
        borderRadius="10px"
        padding="10px"
        bg="#F7F7F7"
        width="43%"
        height="30px"
        marginTop="40px"
        marginLeft="6%"
      >
        <Box marginTop="7.5px" color="#EA1D2C">
          <BiSearch />
        </Box>
        <Input
          paddingLeft="5%"
          width="80%"
          style={{ outline: "none" }}
          bg="#F7F7F7"
          placeholder="Busque por item ou loja"
          onChange={(event) => setSearch(event.target.value)}
        />
      </Flex>
      <Flex flexWrap="wrap" justifyContent="center" fontFamily="arial">
        {search.length > 0
          ? filteredProducts.map((item: any, i: number) => (
              <Pedidos key={i + 5} item={item} />
            ))
          : pedidosMocks.map((item, i) => <Pedidos key={i + 10} item={item} />)}
      </Flex>
    </main>
  );
};
export { Main };
