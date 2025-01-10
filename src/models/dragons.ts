export interface IDragon {
  id: string;
  createdAt: string;
  name: string;
  type: string;
  histories: [];
}

export interface IGetDragonById {
  id: string;
}

export interface ICreateDragon {
  name: string;
  type: string;
  histories: Array<string | void>;
}

export interface IUpdateDragon extends ICreateDragon {
  id: string;
  createdAt?: string;
}

export interface IDeleteDragon {
  id: string;
}
