import { FC, Fragment, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import Layout from "../layout";
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const SinglePage = lazy(() => import("../pages/SinglePage"));

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={false}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element="home page" />
          {Object.values(paths).map((route: any) => (
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

export default AppRoutes;
