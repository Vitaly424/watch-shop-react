import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const WatchBlockSkeleton: FC = () => (
    <ContentLoader
        speed={2}
        width={376}
        height={494}
        viewBox="0 0 376 494"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="15" ry="15" width="376" height="494" />
    </ContentLoader>
);
