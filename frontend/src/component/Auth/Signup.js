import React, { useState } from "react";
import {
  VStack,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

import { Eye, EyeClosed } from "phosphor-react";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirm(!showConfirm);
  };

  const postDetails = (pics) => {};

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name" isRequired>
        <FormLabel fontFamily={"Scada"} fontWeight={"bold"}>
          Name
        </FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
      <FormControl id="confirm-password" isRequired>
        <FormLabel fontFamily={"Scada"} fontWeight={"bold"}>
          Confirm Password
        </FormLabel>
        <InputGroup>
          <Input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h="1.75rem" size={"sm"} onClick={handleShowConfirmPassword}>
              {showConfirm ? <Eye /> : <EyeClosed />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel fontFamily={"Scada"} fontWeight={"bold"}>
          Upload Your Picture
        </FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
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
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
