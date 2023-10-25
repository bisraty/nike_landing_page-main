import Home from "./Page/Home";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./Page/ProductsPage";
import ScrollToTop from "./Page/ScrollToTop";
import DetailPage from "./Page/DetailPage";
import AboutUsPage from "./Page/AboutUsPage";
import { Suspense } from "react";

const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[25px] mt-[20vh] text-blue '>Loading ...</h1>
          </div>
        }
      >
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product/detail' element={<DetailPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />

          <Route path='*' element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
