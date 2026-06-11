import { Box } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";

const SocialIcons = () => {
  const IconsSize = '1.5rem'
  return (
    <Box display={'flex'} gap={6}>
      <FaGithub size={IconsSize} />
      <FaTelegram size={IconsSize} />
      <FaEarthAsia size={IconsSize} />
    </Box>
  )
}

export default SocialIcons