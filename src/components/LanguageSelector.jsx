import { Box, Text, Menu, Button } from "@chakra-ui/react"
import { LANGUAGE_VERSION } from "../constants"
const ACTIVE_COLOR = 'blue.700'
const languages = Object.entries(LANGUAGE_VERSION)
const LanguageSelector = ({ language, onSelect }) => {
    return (
        <Box mb={2}>
            <Text>select language : </Text>
            <Menu.Root>
                <Menu.Trigger />
                <Button as={Button}>
                    {language}
                </Button>
                <Menu.Positioner>
                <Menu.Content>
                    {languages.map(([lang, version]) => (
                        <Menu.Item key={lang} color={lang === language ? ACTIVE_COLOR : ''} bg={lang === language ? 'gray.700' : 'transparent'} onClick={() => onSelect(lang)}>
                            {lang}
                            <Text>
                                {version}
                            </Text>
                        </Menu.Item>
                    ))}
                </Menu.Content>

                </Menu.Positioner>
            </Menu.Root>
        </Box>
    )
}

export default LanguageSelector