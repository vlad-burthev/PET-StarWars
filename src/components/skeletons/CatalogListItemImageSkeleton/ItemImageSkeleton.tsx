import ContentLoader from "react-content-loader";

interface ItemImageSkeletonProps {
  display: string;
}

const ItemImageSkeleton = ({ display }: ItemImageSkeletonProps) => (
  <ContentLoader
    speed={2}
    width={150}
    height={150}
    viewBox="0 0 150 150"
    backgroundColor="#605757"
    foregroundColor="#ecebeb"
    display={display}
  >
    <circle cx="75" cy="75" r="75" />
  </ContentLoader>
);

export default ItemImageSkeleton;
