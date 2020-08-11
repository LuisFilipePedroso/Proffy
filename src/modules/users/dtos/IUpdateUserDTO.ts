import ICreateUserDTO from "./ICreateUserDTO";

export default interface IUpdateUserDTO extends Partial<ICreateUserDTO>{
  id: string;
}
