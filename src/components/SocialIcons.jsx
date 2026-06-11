import { Box, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";

const SocialIcons = () => {
  const IconsSize = '1.2rem'
  return (
    <Box display={'flex'} gap={6}>
      <Link href="https://github.com/root404-ir" target="_blank" _focus={{ outline: "none" }} ><FaGithub size={IconsSize} /></Link>
      <Link href="https://t.me/mtjsroot" target="_blank" _focus={{ outline: "none" }}><FaTelegram size={IconsSize} /></Link>
      <Link href="http://me.mtjs.ir" target="_blank" _focus={{ outline: "none" }}><FaEarthAsia size={IconsSize} /></Link>
    </Box>
  )
}

export default SocialIcons