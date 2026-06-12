import { Box, Text, Menu, Button, Flex, HStack } from "@chakra-ui/react"
import { LANGUAGE_VERSION } from "../constants"
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
const ACTIVE_COLOR = 'blue.700'
const languages = Object.entries(LANGUAGE_VERSION)
import { LuCheck, LuCode, LuChevronDown } from "react-icons/lu";
const LanguageSelector = ({ language, onSelect }) => {
    return (
        <Box mb={2}>
            <Text mb={2} fontFamily={'monospace'}>select language</Text>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Button
                        size="sm"
                        variant="outline"
                        bg="gray.900"
                        color="gray.100"
                        borderColor="gray.700"
                        _hover={{
                            bg: "gray.800",
                            borderColor: "blue.400",
                        }}
                        _expanded={{
                            bg: "gray.800",
                            borderColor: "blue.400",
                        }}
                    >
                        <HStack gap={2}>
                            <LuCode />
                            <Text fontFamily="mono">{language}</Text>
                            <LuChevronDown />
                        </HStack>
                    </Button>
                </Menu.Trigger>

                <Menu.Positioner>
                    <Menu.Content
                        bg="gray.900"
                        border="1px solid"
                        borderColor="gray.700"
                        borderRadius="lg"
                        p={1}
                        minW="250px"
                        shadow="xl"
                    >
                        {languages.map(([lang, version]) => {
                            const isActive = lang === language;

                            return (
                                <Menu.Item
                                    key={lang}
                                    value={lang}
                                    onClick={() => onSelect(lang)}
                                    borderRadius="md"
                                    py={2}
                                    px={3}
                                    bg={isActive ? "whiteAlpha.100" : "transparent"}
                                    color={isActive ? ACTIVE_COLOR : "gray.200"}
                                    _hover={{
                                        bg: "whiteAlpha.100",
                                    }}
                                >
                                    <Flex
                                        w="full"
                                        align="center"
                                        justify="space-between"
                                    >
                                        <HStack gap={3}>
                                            {isActive ? (
                                                <LuCheck size={14} />
                                            ) : (
                                                <Box w="14px" />
                                            )}

                                            <Text
                                                fontFamily="mono"
                                                fontWeight={isActive ? "semibold" : "normal"}
                                            >
                                                {lang}

                                            </Text>
                                        </HStack>

                                        <Text
                                            fontSize="xs"
                                            color="gray.500"
                                        >
                                            {version}
                                        </Text>
                                    </Flex>
                                    {lang === "javascript" && <IoLogoJavascript size={18}/>}
                                    {lang === "html" && <IoLogoHtml5 size={18}/>}
                                    {lang === "css" && <IoLogoCss3 size={18}/>}
                                </Menu.Item>
                            );
                        })}
                    </Menu.Content>
                </Menu.Positioner>
            </Menu.Root>
        </Box>
    )
}

export default LanguageSelector

