// Packages
import { ReactElement } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

// Components
import { Card, Loading } from 'components/core';
import { DragonDeleteModal } from 'components/shared';

// Hooks
import { useHome } from 'hooks/home/useHome';

// Styles
import * as Styled from './styles';

export const Home = (): ReactElement => {
  const { dragonsList, onDeleteDragon, isLoading } = useHome();

  return (
    <Styled.HomeContainer className="container">
      {isLoading ? (
        <Loading />
      ) : (
        dragonsList?.map((dragon) => (
          <Dialog.Root key={dragon?.id}>
            <Card
              id={dragon?.id}
              title={dragon?.name}
              subtitle={dragon?.type}
              descriptions={dragon?.histories}
            />
            <DragonDeleteModal data={dragon} onDelete={onDeleteDragon} />
          </Dialog.Root>
        ))
      )}
    </Styled.HomeContainer>
  );
};
