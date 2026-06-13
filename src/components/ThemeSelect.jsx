import { Box, Button, HStack, Menu,Text } from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu"
import { MdColorLens } from "react-icons/md"

const ThemeSelect = ({ theme, setTheme,themes }) => {
    return (
        <Box>
            <Text mb={2} fontFamily={'monospace'}>select theme</Text>
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
                        <MdColorLens color="#fff" />
                        <HStack gap={2}>
                            <Text fontFamily={'mono'}>{theme}</Text>
                        </HStack>
                    </Button>
                </Menu.Trigger>
                <Menu.Positioner>
                    <Menu.Content bg="gray.900"
                        border="1px solid"
                        borderColor="gray.700"
                        borderRadius="lg"
                        p={1}
                        minW="250px"
                        shadow="xl"
                    >
                        {themes.map(t => (
                            <Menu.Item key={t.value} onClick={() => setTheme(t.value)}>
                                {theme === t.value && <LuCheck />}
                                {t.label}
                            </Menu.Item>
                        ))}

                    </Menu.Content>
                </Menu.Positioner>
            </Menu.Root>
        </Box>
    )
}

export default ThemeSelect