import { BtnMyLocation, MapView, ReactLogo, SearchBar } from '../components';

export const HomeScreen = () => {
  return (
    <div className="bg-[#D5DBDB] h-screen">
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
    </div>
  );
};
