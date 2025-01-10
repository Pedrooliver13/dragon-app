// Packages
import { toast } from 'react-toastify';

// Libs
import { api } from 'libs/axios';

// Models
import { IDeleteDragon } from 'models/dragons';

export const deleteDragon = async (data: IDeleteDragon): Promise<void> => {
  try {
    await api.delete(`/dragon/${data?.id}`);
    toast.success('Dragão deletado com sucesso!');
  } catch {
    toast.error('Erro ao tentar deletar dragão!');
  }
};
