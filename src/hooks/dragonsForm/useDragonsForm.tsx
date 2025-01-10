// Packages
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Models
import { IDragon, ICreateDragon, IUpdateDragon } from 'models/dragons';

// Services
import { getDragonById } from 'services/dragon/getDragonById';
import { createDragon } from 'services/dragon/createDragon';
import { updateDragon } from 'services/dragon/updateDragon';

// Utils
import { formatDate } from 'utils/formatter';

export const useDragonsForm = () => {
  const navigate = useNavigate();

  const [dragonValues, setDragonValues] = useState<IDragon | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const preparedValues = useMemo(
    () => ({
      id: dragonValues?.id || '',
      name: dragonValues?.name || '',
      type: dragonValues?.type || '',

      histories: Array.isArray(dragonValues?.histories)
        ? dragonValues?.histories?.join('/ ')
        : '',

      createdAt: formatDate(dragonValues?.createdAt),
    }),
    [dragonValues]
  );

  const onGetDragonById = useCallback((id: string) => {
    setIsLoading(true);

    getDragonById({ id })
      .then((response) => {
        if (!response) {
          return setDragonValues(null);
        }

        setDragonValues(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onCreateDragon = useCallback(
    (data: ICreateDragon) => {
      setIsLoading(true);

      createDragon(data)
        .then(() => {
          navigate('/');
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [navigate]
  );

  const onUpdateDragon = useCallback(
    (data: IUpdateDragon) => {
      setIsLoading(true);

      updateDragon(data)
        .then(() => {
          navigate('/');
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [navigate]
  );

  return {
    preparedValues,
    onGetDragonById,
    onCreateDragon,
    onUpdateDragon,
    isLoading,
  };
};
