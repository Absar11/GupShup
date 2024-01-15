import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Eye, EyeClosed } from "phosphor-react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the details",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Success",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occuered!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

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
        isLoading={loading}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
