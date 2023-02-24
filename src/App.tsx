import Navbar from '@/sections/navbar';
import Classes from '@/sections/classes';
import Home from '@/sections/home';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Benefits from './sections/benefits';
import {contact} from '@/sections/Contact'




function App({}){

  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (<div className="app bg-gray-20">
  <Navbar  isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}
  />
  <Home setSelectedPage={setSelectedPage}   />
  <Benefits setSelectedPage={setSelectedPage}   />
  <Classes  setSelectedPage={setSelectedPage}   />
  <Contact setSelectedPage={setSelectedPage}   />
  </div>);
}

export default App;