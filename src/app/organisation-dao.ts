import { ChangeOwner } from "./change-owner";
import { Product } from "./product";
import { UserDao } from "./user-dao";

export class OrganisationDao {
    id!: string;
    description!: string;
    variant!: string;
    prize!: string;
    quantity!: string;
    owner!: string;
    status!: string;
    productCode!: string
    newOwner!: string;

}
