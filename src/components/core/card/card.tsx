// Packages
import { ReactElement } from 'react';
import { Pencil as PencilIcon, Trash as TrashIcon } from 'phosphor-react';
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

// Components
import { Button } from 'components/core';

// Styles
import * as Styled from './styles';

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  descriptions: Array<string>;
  'data-cy'?: string;
}

export const Card = (props: CardProps): ReactElement => {
  return (
    <Styled.CardContainer id={props?.id} data-cy={props?.['data-cy']}>
      <header className="header">
        <img
          width="50px"
          height="50px"
          src="https://i.pinimg.com/236x/e7/9f/63/e79f63133b599e13d8f61a3ca772775c.jpg"
          alt="Imagem de perfil do dragão"
        />
        <div className="header__title">
          <p>#{props?.id}</p>
          <h4>{props?.title}</h4>
        </div>
        <div className="header__actions">
          <Link to={`/dragons/edit/${props?.id}`}>
            <Button id="btn-edit" data-cy="btn-edit" $variant="secondary">
              <PencilIcon size={16} />
            </Button>
          </Link>

          <Dialog.Trigger asChild>
            <Button id="btn-delete" data-cy="btn-delete" $variant="secondary">
              <TrashIcon size={16} color="red" />
            </Button>
          </Dialog.Trigger>
        </div>
      </header>

      <div className="content">
        <div className="content__subtitle">
          <span>{props?.subtitle}</span>
        </div>
        {Array?.isArray(props?.descriptions) &&
          props?.descriptions?.map((description, index) => (
            <p className="content__description" key={index + description}>
              {description}
            </p>
          ))}
      </div>
    </Styled.CardContainer>
  );
};
