import type { FC } from "react";
import ContentLoader from "react-content-loader";

const UniversalCardSkeleton: FC = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={230}
    viewBox="0 0 200 230"
    backgroundColor="#605757"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="198" height="294" />
  </ContentLoader>
);

export default UniversalCardSkeleton;
