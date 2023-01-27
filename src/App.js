import { ChakraProvider, useRangeSlider } from "@chakra-ui/react";

import Cards from "./components/Cards";

import GlobalState from "./contexts/GlobalState";
import HomePage from "./page/HomePage";

function App() {


  return (
    <ChakraProvider>
    <GlobalState>
   
 <HomePage/>
    
    </GlobalState>
    </ChakraProvider>
  );
}

export default App;
