import React from 'react';
import '../src/App.css';
import Header from '../src/components/Practice/Header.js'


const  App=(props) =>{
  console.log(props,'app')
  return (
    <>
     <Header 
      hearderName = 'Manu'
     />
</>
  );
}

export default App;
