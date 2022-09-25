import { Button, Flex, Select, Box, Input } from "@chakra-ui/react";
import { filtersMocks, selectOptionMocks } from "../../../../assets/mocks";
import { BiSearch } from "react-icons/bi";
import { FC } from "react"

const Header: FC = () => {
  return (
    <header>
      <Flex
        color="white"
        bg="#181A1B"
        justifyContent="space-between"
        alignItems="center"
        height="13vh"
      >
        <img
          src="https://cdn.discordapp.com/attachments/1023291808467394645/1023342463127142470/Captura_de_tela_2022-09-24_181720.png"
          alt="logo-ifood"
        />
        <Flex width="30%" justifyContent="space-around">
          {filtersMocks.map((item, i) => (
            <Button
              style={{cursor: 'pointer'}}
              fontSize="14px"
              borderRadius="10px"
              padding="10px"
              fontWeight="bold"
              fontFamily="revert"
              bg="transparent"
              color="white"
              key={i}
            >
              {item}
            </Button>
          ))}
        </Flex>
        <Flex
          justifyContent="flex-start"
          borderRadius="10px"
          padding="10px"
          bg="#F7F7F7"
          width="23%"
          marginRight="10%"
        >
          <Box marginTop="4px" color="#EA1D2C">
            <BiSearch />
          </Box>
          <Input
            paddingLeft="5%"
            width="80%"
            style={{outline: "none"}}
            bg="#F7F7F7"
            placeholder="Busque por item ou loja"
          />
        </Flex>
      </Flex>
    </header>
  );
};

export { Header };
