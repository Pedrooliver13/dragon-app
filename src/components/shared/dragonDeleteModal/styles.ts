// Packages
import styled, { css } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled(Dialog.Content)`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors['gray-900']};
    border: 1px solid ${theme.colors['gray-300']};
    border-radius: 8px;

    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    padding: 2rem;

    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    p {
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding: 1rem;
      font-size: 1.8rem;
    }

    .footer {
      display: flex;
      align-items: center;
      gap: 10px;

      button {
        flex: 1;
      }
    }
  `}
`;
