// Packages
import { useEffect, useState } from 'react';

// Models
import { IDragon } from 'models/dragons';

// Services
import { getDragonsList } from 'services/dragon/getDragonsList';
import { deleteDragon } from 'services/dragon/deleteDragon';

export const useHome = () => {
  const [dragonsList, setDragonsList] = useState<IDragon[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDragonsList()
      .then((response) => {
        if (!response || !Array.isArray(response)) {
          return setDragonsList([]);
        }

        setDragonsList(response);
        setIsLoading(true);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 3000);
      });
  }, []);

  const onDeleteDragon = (id: string) => {
    setIsLoading(true);

    deleteDragon({ id })
      .then(() => {
        setDragonsList((prev) => prev.filter((dragon) => dragon?.id !== id));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { dragonsList, onDeleteDragon, isLoading };
};
