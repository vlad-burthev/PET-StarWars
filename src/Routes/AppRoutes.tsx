import { FC, Fragment, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import Layout from "../layout";
const CatalogPage = lazy(() => import("../pages/CatalogPage"));

const AppRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element="home page" />
          {paths.map(({ route, SingleComponent }: any) => (
            <Fragment key={route}>
              <Route path={route} element={<CatalogPage />} />
              <Route path={route + "/:id"} element={<SingleComponent />} />;
            </Fragment>
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
