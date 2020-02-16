import { Model } from './model';
export class User extends Model {
  public name: string;
  public role: string;

  constructor(object?: any) {
    super(object)
  }
}
