// Packages
import { ReactElement, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Info as InfoIcon } from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

// Components
import { Button, Input } from 'components/core';

// Hooks
import { useDragonsForm } from 'hooks/dragonsForm/useDragonsForm';

// Styles
import * as Styled from './styles';

const schema = zod.object({
  name: zod.string().nonempty('Campo obrigatório.'),
  type: zod.string().nonempty('Campo obrigatório.'),
  histories: zod.string(),
});

type FormValues = zod.infer<typeof schema>;

export const DragonsForm = (): ReactElement => {
  const { id } = useParams();

  const {
    dragonValues,
    preparedDragonValues,
    onGetDragonById,
    onCreateDragon,
    onUpdateDragon,
    isLoading,
  } = useDragonsForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    values: preparedDragonValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues): void => {
    const preparedData = {
      ...data,
      histories: data?.histories?.split('/').map((history) => history.trim()),
    };

    if (id) {
      onUpdateDragon({
        ...preparedData,
        id,
        createdAt: dragonValues?.createdAt,
      });
      return;
    }

    onCreateDragon(preparedData);
  };

  useEffect(() => {
    if (id) {
      onGetDragonById(id);
    }
  }, [id, onGetDragonById]);

  return (
    <Styled.DragonFormContainer className="container">
      <header className="header">
        <h1>{id ? 'Editar Dragão' : 'Adicionar Dragão'}</h1>

        <Link to={'/'} data-cy="btn-back">
          <Button id="btn-back" $variant="secondary">
            Voltar
          </Button>
        </Link>
      </header>
      <div className="info">
        <p>
          <InfoIcon size={20} weight="fill" /> Atenção!:
        </p>
        <ul>
          <li>Utilize "/" Para separar os parágrafos no campo "Histórias".</li>
        </ul>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__row">
          <Input
            id="name"
            label="Nome"
            autoFocus
            error={errors?.name?.message}
            {...register('name')}
          />
          <Input
            id="type"
            label="Tipo"
            error={errors?.type?.message}
            {...register('type')}
          />
        </div>
        <Input
          id="histories"
          label="Histórias"
          error={errors?.histories?.message}
          {...register('histories')}
        />
        {id && (
          <Input
            id="createdAt"
            label="Data de Criação"
            value={preparedDragonValues?.createdAt}
            disabled
          />
        )}
        <div className="form__footer">
          <Link to="/">
            <Button id="btn-save" type="button" $variant="secondary">
              Cancelar
            </Button>
          </Link>
          <Button
            id="btn-save"
            type="submit"
            $variant="primary"
            isLoading={isLoading}
          >
            Salvar
          </Button>
        </div>
      </form>
    </Styled.DragonFormContainer>
  );
};
