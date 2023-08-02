import React from 'react';
import { VersionContainer } from './styles.Version';

interface VersionProps {
    version: string;
}

const Version: React.FC<VersionProps> = ({ version }) => {
    return (
        <VersionContainer>
            v{version}
        </VersionContainer>
    );
}

export default Version;
