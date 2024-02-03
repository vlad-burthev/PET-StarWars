//deps
import { FC, Fragment, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import paths from "./paths/paths";
//components
const Layout = lazy(() => import("./layout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const SinglePage = lazy(() => import("./pages/SinglePage"));

export const App: FC = () => {
  return (
    <Suspense fallback={false}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {Object.values(paths).map((route: string) => (
            <Fragment key={route}>
              <Route path={route} element={<CatalogPage />} />
              <Route path={route + "/:id"} element={<SinglePage />} />;
            </Fragment>
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
