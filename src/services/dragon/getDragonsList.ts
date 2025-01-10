// Packages
import { toast } from 'react-toastify';

// Libs
import { api } from 'libs/axios';

// Models
import { IDragon } from 'models/dragons';

export const getDragonsList = async (): Promise<Array<IDragon> | undefined> => {
  try {
    const response = await api.get('/dragon');

    if (!Array?.isArray(response?.data)) {
      return;
    }

    const sortedData = response?.data?.sort((a: IDragon, b: IDragon) => {
      return a?.name?.localeCompare(b?.name);
    });

    return sortedData;
  } catch {
    toast.error('Erro ao buscar lista de dragões!');
  }
};
