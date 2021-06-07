import {
  Box,
  Image,
  Heading,
  Text,
  Link,
  Stack,
  Grid,
  GridItem,
  Flex,
  Center,
  Square

} from '@chakra-ui/react'

export default function Produtos() {
  return (
    <Box h="100%">
           
      <Box mt="5" mb="5" align="center">
        <Image src="/milho.jpg" alt="Segun Adebayo" />
      </Box>

      <Heading align="center" color="green.50">Produtos e serviços</Heading>

      <Text mt="5"ml="20" mr="20"fontSize={{ base: "0.875rem", md: "1rem", lg: "1.125rem" }}>
      Sou um parágrafo. Clique aqui para editar-me e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo lugar para você contar sua história e permitir que seus clientes saibam um pouco mais sobre você.
      </Text>

    </Box>
  ) 
}
