import { Grid, GridItem } from '@chakra-ui/react';
import './App.css';

function App() {
   return (
      <Grid
         templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
         }}
         gap="4"
         padding="4"
      >
         <GridItem area="nav">Nav</GridItem>
         <GridItem area="aside" display={{ base: 'none', lg: 'block' }}>
            Aside
         </GridItem>
         <GridItem area="main">Main</GridItem>
      </Grid>
   );
}

export default App;
