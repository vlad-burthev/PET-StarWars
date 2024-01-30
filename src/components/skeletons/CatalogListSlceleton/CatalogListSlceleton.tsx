import ContentLoader from "react-content-loader";

interface I_CatalogListSlceletonProps {
  display: string;
}

const CatalogListSlceleton = ({ display }: I_CatalogListSlceletonProps) => (
  <ContentLoader
    speed={2}
    width={800}
    height={600}
    viewBox="0 0 800 600"
    backgroundColor="#605757"
    foregroundColor="#ecebeb"
    display={display}
  >
    <circle cx="100" cy="105" r="75" />
    <circle cx="300" cy="105" r="75" />
    <circle cx="500" cy="103" r="75" />
    <circle cx="700" cy="105" r="75" />
    <rect x="25" y="200" rx="0" ry="0" width="150" height="30" />
    <rect x="225" y="200" rx="0" ry="0" width="150" height="30" />
    <rect x="425" y="200" rx="0" ry="0" width="150" height="30" />
    <rect x="625" y="200" rx="0" ry="0" width="150" height="30" />
    <circle cx="100" cy="351" r="75" />
    <circle cx="300" cy="351" r="75" />
    <circle cx="500" cy="349" r="75" />
    <circle cx="700" cy="351" r="75" />
    <rect x="25" y="450" rx="0" ry="0" width="150" height="30" />
    <rect x="225" y="450" rx="0" ry="0" width="150" height="30" />
    <rect x="425" y="450" rx="0" ry="0" width="150" height="30" />
    <rect x="625" y="450" rx="0" ry="0" width="150" height="30" />
    <rect x="225" y="500" rx="12" ry="12" width="50" height="50" />
    <rect x="325" y="500" rx="12" ry="12" width="150" height="50" />
    <rect x="525" y="500" rx="12" ry="12" width="50" height="50" />
  </ContentLoader>
);

export default CatalogListSlceleton;
