import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { Eye, EyeClosed } from "phosphor-react";
import React, { useState } from "react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"}>
      <FormControl id="email" isRequired>
        <FormLabel fontFamily={"Scada"} fontWeight={"bold"}>
          Email
        </FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel fontFamily={"Scada"} fontWeight={"bold"}>
          Password
        </FormLabel>
        <InputGroup>
          <Input
            type={showPass ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h="1.75rem" size={"sm"} onClick={handleShowPassword}>
              {showPass ? <Eye /> : <EyeClosed />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        bg={"rgba(0, 0, 0, 0.64)"}
        _hover={{
          backgroundColor: "black",
          color: "white",
          fontSize: "1.15rem",
          transition: "background-color 0.5s, color 0.5s",
        }}
        // colorScheme="black.100"
        color={"white"}
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
