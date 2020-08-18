import ICreateClassDTO from './ICreateClassDTO';

export default interface IUpdateClassDTO extends Partial<ICreateClassDTO> {
  id: string;
}
