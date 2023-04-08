import Logo from '../../../../../common/Logo';
import { useSelector } from "react-redux"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  VStack,
  InputLeftAddon,
} from '@chakra-ui/react';

import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5"
import { FiChevronDown } from "react-icons/fi"


export default function NavBar() {
  const [searchText, setSerachText] = useState("")
  const [active, sActive] = useState(false);  //user avatar
  const [tags, settags] = useState(false)


  const navigate = useNavigate()
  const handleActive = () => sActive(!active)

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of this session",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("userToken");
        navigate("/login")
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText?.trim()?.length > 0)
      navigate(`/search/${searchText}`, { state: tags })
  }
  const profile = useSelector((state) => state.profile.profile)

  return (
    <>
      <Box
        shadow={"md"}
        bg={useColorModeValue('white')} className={'px'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Logo />
          </Box>

          <form className={'serachBar'} onSubmit={handleSubmit}>
            <InputGroup
              transition={'all .3s ease-in-out'}
              borderRadius='.3rem'
              px={"2"}>
              {tags ? <InputLeftAddon
                children='tags' /> : null}
              <Input
                className='input'
                style={{ padding: "0 5px", }}
                size="md"
                onKeyDown={e => {
                  if (e.key === 'Backspace' && e.currentTarget.value.trim().length === 0) {
                    settags(false)
                  }
                }}
                onChange={(e) => {
                  let a = e.currentTarget.value
                  if (a === "tags ") {
                    setSerachText(null)
                    e.currentTarget.value = ''

                    settags(true)
                  }

                  setSerachText(e.currentTarget.value)
                }}
                value={searchText}
                placeholder="Search any Query..."
              />

              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onSubmit={handleSubmit}>
                  <IoSearchOutline onClick={handleSubmit} />
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
          <Flex alignItems={'center'}>
            <Menu isOpen={active} >
              <MenuButton
                onClick={handleActive}
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}>
                <HStack >
                  <Avatar
                    size={'sm'}
                    src={undefined}
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm">{profile?.name}</Text>
                  </VStack>

                </HStack>
              </MenuButton>
              {
                profile ?
                  <MenuList
                    shadow={"md"}
                    bg={'white'}>
                    <MenuItem>
                      <Link to={"/profile"}>Profile</Link>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout}>Sign out</MenuItem>
                  </MenuList>
                  :

                  <MenuList
                    shadow={"md"}
                    bg={'white'}>
                    <MenuItem>
                      <Link to={"/login"}>login</Link>
                    </MenuItem>
                  </MenuList>
              }
            </Menu>
          </Flex>
        </Flex>

      </Box>

    </>
  );
}