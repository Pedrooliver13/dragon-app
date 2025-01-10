// Packages
import { ReactElement } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Styles
import * as Styled from './styles';

export const Loading = (): ReactElement => {
  return (
    <Styled.LoadingContainer className="container">
      <DotLottieReact
        src="https://lottie.host/dc04ddf2-e97f-4bc2-a7db-d2ba889ca5a0/kaYPBPcEcG.lottie"
        loop
        autoplay
      />
      <p>Carregando...</p>
    </Styled.LoadingContainer>
  );
};
