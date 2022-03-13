import { memo } from "react";

import BeatLoader from "react-spinners/BeatLoader";

import { TPageLoader } from "../../types/standard";
import { PageLoaderWrapper } from "./PageLoader.styles";

const PageLoader = memo(
  ({ size }: TPageLoader): JSX.Element => (
    <PageLoaderWrapper>
      <BeatLoader size={size} color="#00000080" loading />
    </PageLoaderWrapper>
  )
);

export default PageLoader;
