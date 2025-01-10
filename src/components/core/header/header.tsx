// Packages
import { ReactElement } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Power as PowerIcon } from 'phosphor-react';
import { toast } from 'react-toastify';

// Components
import { Button } from 'components/core';

// Assets
import DragonLogo from 'assets/logo2.svg';

// Styles
import * as Styled from './styles';

export const Header = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const { pathname } = location;

  const isShowAddButton = !['/dragons/new', `/dragons/edit/${id}`].includes(
    pathname
  );

  const handleLogout = () => {
    navigate('/login');
    toast.success('Logout realizado com sucesso!');
  };

  return (
    <Styled.HeaderContainer>
      <div className="content container">
        <Link to="/" data-cy="header-logo">
          <img
            id="header-logo"
            width="100px"
            height="auto"
            src={DragonLogo}
            alt="Logo marga escrita Dragons"
          />
        </Link>

        <div className="content__actions">
          {isShowAddButton && (
            <Button
              id="btn-add-dragon"
              data-cy="btn-add-dragon"
              $variant="secondary"
              onClick={() => navigate('/dragons/new')}
            >
              Adicionar Dragão
            </Button>
          )}
          <Button
            id="btn-logout"
            data-cy="btn-logout"
            $variant="secondary"
            onClick={handleLogout}
          >
            <PowerIcon size={24} />
          </Button>
        </div>
      </div>
    </Styled.HeaderContainer>
  );
};
