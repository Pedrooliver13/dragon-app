// Packages
import { toast } from 'react-toastify';

// Libs
import { api } from 'libs/axios';

// Models
import { IDragon, IGetDragonById } from 'models/dragons';

export const getDragonById = async (
  data: IGetDragonById
): Promise<IDragon | undefined> => {
  try {
    const response = await api.get(`/dragon/${data?.id}`);
    return response?.data;
  } catch {
    toast.error('Erro ao buscar lista de dragões!');
  }
};
