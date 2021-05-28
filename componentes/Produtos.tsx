import { Box, Text, SimpleGrid, Link, Stack } from "@chakra-ui/react"

export function Produtos() {

  return (
    <Box bg="green" w="100%" h="500px" p={4} color="green">
      <Text fontSize="2rem" color="whitey at '/h"><Link m="4rem" font-size="2rem">Produtos</Link></Text>
      <Text color="white" ml="4rem" mr="4rem">
      Sou um parágrafo. Clique aqui para editar-me e adicionar o seu
       próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar
        duas vezes sobre mim e você poderá adicionar o seu próprio 
        conteúdo e trocar fontes. Sou um ótimo lugar para você contar 
        sua história e permitir que seus clientes saibam um pouco mais 
        sobre você.
      </Text>
    
      <SimpleGrid columns={2} m="4rem" spacing={10}>
        <Box bg="white" height="5rem">
        </Box>
        <Box bg="white" height="5rem"></Box>
        <Box bg="white" height="5rem"></Box>
        <Box bg="white" height="5rem"></Box>
        
      </SimpleGrid>
    </Box>
  )
}