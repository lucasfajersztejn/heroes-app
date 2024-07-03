import { Navigate, Route, Routes } from 'react-router';
import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPage />} />

          {/* Search, Hero by id */}

          <Route path="/" element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
      
    </>
  )
}
