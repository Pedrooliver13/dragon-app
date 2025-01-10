// Packages
import { toast } from 'react-toastify';

// Libs
import { api } from 'libs/axios';

// Models
import { IUpdateDragon } from 'models/dragons';

export const updateDragon = async (data: IUpdateDragon): Promise<void> => {
  try {
    await api.put(`/dragon/${data?.id}`, data);
    toast.success('Dragão atualizado com sucesso!');
  } catch {
    toast.error('Erro ao tentar atualizar dragão!');
  }
};
