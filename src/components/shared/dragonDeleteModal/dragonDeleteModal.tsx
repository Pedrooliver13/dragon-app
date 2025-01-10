// Packages
import { ReactElement } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import * as Dialog from '@radix-ui/react-dialog';

// Components
import { Button } from 'components/core';

// Models
import { IDragon } from 'models/dragons';

// Styles
import * as Styled from './styles';

interface DragonDeleteModalProps {
  data: IDragon;
  onDelete?: (id: string) => void;
}

export const DragonDeleteModal = (
  props: DragonDeleteModalProps
): ReactElement => {
  return (
    <Dialog.Portal>
      <Styled.Overlay />

      <Styled.ModalContainer>
        <Dialog.Title>
          <DotLottieReact
            src="https://lottie.host/5a36cc07-e417-4849-8103-f9037a089fd2/O2gd86dnpC.lottie"
            loop
            autoplay
          />
        </Dialog.Title>

        <Dialog.Description>
          Você tem certeza que deseja deletar o dragão{' '}
          <strong>{props?.data?.name}</strong>?
        </Dialog.Description>

        <div className="footer">
          <Dialog.Trigger asChild>
            <Button id="btn-close-modal" $variant="secondary">
              Cancelar
            </Button>
          </Dialog.Trigger>
          <Button
            id="btn-delete-modal"
            $variant="primary"
            onClick={() => props?.onDelete?.(props?.data?.id)}
          >
            Deletar
          </Button>
        </div>
      </Styled.ModalContainer>
    </Dialog.Portal>
  );
};
