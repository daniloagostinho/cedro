import { Model } from './model';

export class Investimento extends Model {
    constructor(
        public tipoInvestimento: String) {
            super();
        }
}