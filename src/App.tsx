import Navbar from '@/sections/navbar'
import { useState } from 'react';

enum SelectedPage {
  Home = "home",
  Benefits ="benefits",
  Classes = "classes",
  Contacts = "contacs"
}

function App({}){

  const [selectedPage,setSelectedPage] = useState<string>(SelectedPage.Home);


  return <div className="app bg-gray-20">
  <Navbar
  selectedPage={selectedPage} setSelectedPage={setSelectedPage}
  />
  </div>
}

export default App;