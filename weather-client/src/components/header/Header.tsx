import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";

const Header = () => {
	const [bg, setBg] = useState('white')

	const changeBg =  () => {
		document.body.style.backgroundColor == "white"
      ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = 'white'
	}

	useEffect(()=>{
		document.body.style.backgroundColor = bg;		
	},[bg])

  return (
    <Flex w="1200px" justifyContent="space-between" mb="30px">
      <Flex alignItems="center" gap="18px">
        <Image src="/logo.svg" alt="logo" width={65} height={65} />
        <Heading
          color="#4793FF"
          fontSize="25px"
          fontWeight="700"
          fontFamily="Montserrat"
          textTransform="uppercase"
        >
          React weather
        </Heading>
      </Flex>
      <Flex alignItems="center" gap="20px">
        <Image
          src="/dropletIcon.svg"
          alt="dropletIcon"
          width={35}
          height={35}
          onClick={changeBg}
        />
        <Select
          placeholder="Выбрать город"
          bg="#4793FF33"
          w="194px"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default Header;
