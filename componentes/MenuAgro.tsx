import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    HStack,
    Square,
    Heading,
    Flex,
    Spacer,
    Box,
    Image,
} from "@chakra-ui/react"

export function MenuAgro() {
    return (
        <div>
            <Flex>
            <Menu >
                <MenuButton as={Button} colorScheme="green" m="10px">
                    Menu<Spacer />
            </MenuButton>
                <MenuList>
                    <MenuItem>Início</MenuItem>
                    <MenuItem>Produtos e Seviços</MenuItem>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Contato</MenuItem>
                </MenuList>
            </Menu>

            <Spacer />
            
            <HStack>
                <Square 
                    size="55px" 
                    ml="10rem" 
                    w="7rem" 
                    bg="green" 
                    color="white">
                    Logo
                </Square>
            </HStack>
            </Flex>
    
            <Image 
                src="./milho.jpg"
                alt="Segun Adebayo"
                width="100%"
                height="300px"
                />
        </div>
    );
}