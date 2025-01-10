// Packages
import { ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as zod from 'zod';

// Components
import { Button, Input } from 'components/core';

// Assets
import DragonLogo from 'assets/logo.svg';
import BackgroundImage from 'assets/background.svg';

// Styles
import * as Styled from './styles';

const schema = zod.object({
  name: zod.string().nonempty('Campo obrigatório.'),
});

type FormValues = zod.infer<typeof schema>;

export const Login = (): ReactElement => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    if (String(data?.name).toLocaleLowerCase() !== 'batata') {
      toast.error('Usuário não encontrado.');

      setError('name', {
        type: 'custom',
        message: 'Usuário não encontrado.',
      });

      return;
    }

    navigate('/');
    toast.success('Bem-vindo!');
    localStorage.setItem('@dragon:dragon-state-1.0.0', 'batata');
  };

  useEffect(() => {
    setFocus('name');
    localStorage.removeItem('@dragon:dragon-state-1.0.0');
  }, [setFocus]);

  return (
    <Styled.LoginContainer>
      <div className="background">
        <img
          width="600px"
          height="600px"
          src={DragonLogo}
          alt="logo red dragon"
        />
        <img src={BackgroundImage} className="background__generic-01" />
        <img src={BackgroundImage} className="background__generic-02" />
      </div>

      <form className="login container" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__header">
          <h1>
            <strong>Olá!</strong>
          </h1>
          <span>Bem-vindo de volta!</span>
        </div>

        <div className="login__content">
          <Input
            id="username"
            label="Nome"
            error={errors?.name?.message}
            {...register('name')}
          />
        </div>

        <div className="login__footer">
          <Button id="btn-login" type="submit">
            Entrar
          </Button>
        </div>
      </form>
    </Styled.LoginContainer>
  );
};
