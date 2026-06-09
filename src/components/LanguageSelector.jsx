import { Box, Text, Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { LANGUAGE_VERSION } from "../constants"
const ACTIVE_COLOR = 'blue.700'
const languages = Object.entries(LANGUAGE_VERSION)
const LanguageSelector = ({ language, onSelect }) => {
    return (
        <Box mb={2}>
            <Text>select language : </Text>
            <Menu>
                <MenuButton as={Button}>
                    {language}
                </MenuButton>
                <MenuList>
                    {languages.map(([lang, version]) => (
                        <MenuItem key={lang} color={lang === language ? ACTIVE_COLOR : ''} bg={lang === language ? 'gray.700' : 'transparent'} onClick={() => onSelect(lang)}>
                            {lang}
                            <Text>
                                {version}
                            </Text>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default LanguageSelector