
import { Stack, StackDivider } from "@chakra-ui/react"
import {
  AiOutlineExperiment,
  AiOutlineFileSearch,
  AiOutlineCarryOut,
  AiOutlineHome
}
  from "react-icons/ai"
import { VscPinnedDirty } from "react-icons/vsc"
import { BiPaintRoll } from "react-icons/bi"
import { Link, useLocation } from 'react-router-dom';

function ForunLeft() {
  return (
    <Stack
      divider={<StackDivider borderColor='gray.300' />}
      top={"0"}
      px="1"
      p={"6"}
      borderRadius="lg"
      shadow={"md"}
      border="1px solid gray.300"
      background={"white"}
      direction={['row', 'row', 'row', 'column']}
      justifyContent={["space-between", "space-between"]}
      spacing={4}>
      <SideItem
        name={"Home"}
        url={"/"}
        icon={<AiOutlineHome />}
      />
      <SideItem
        name={"My Topics"}
        url={"/mytopics"}
        icon={<AiOutlineFileSearch />}
      />
      <SideItem
        name={"My Answers"}
        url={"/myanswers"}
        icon={<AiOutlineCarryOut />}
      />
      <SideItem
        name={"Pinned Questions"}
        url={"/pinned"}
        icon={<VscPinnedDirty />}
      />
      <SideItem
        name={"About us"}
        url={"/about"}
        icon={<BiPaintRoll />}
      />
      <SideItem
        name={"Chat Room"}
        url={"/chatroom"}
        icon={<AiOutlineExperiment />}
      />
    </Stack >
  );
}


const SideItem = ({ name, url, icon }) => {
  const { pathname } = useLocation();
  const active = pathname.includes(url)
  return (
    <Link
      to={url}
      className={`${active ? "active" : ""} sideitems`}>
      {icon}
      <p className="spa">{name}</p>
    </Link>
  )
}


export default ForunLeft
