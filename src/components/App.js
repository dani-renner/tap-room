import React from 'react';
import Header from './Header';
import KegControl from "./KegControl";
import { MDBContainer} from "mdbreact";

function App(){
  return (
    <React.Fragment>
      <MDBContainer>
        <Header />
        <KegControl />
      </MDBContainer>
    </React.Fragment>
  );
}

export default App;