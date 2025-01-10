// Packages
import { toast } from 'react-toastify';

// Libs
import { api } from 'libs/axios';

// Models
import { ICreateDragon } from 'models/dragons';

export const createDragon = async (data: ICreateDragon): Promise<void> => {
  try {
    await api.post('/dragon', data);
    toast.success('Dragão criado com sucesso!');
  } catch {
    toast.error('Erro ao tentar criar dragão!');
  }
};
