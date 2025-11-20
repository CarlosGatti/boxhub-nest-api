import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { MaterialEntryCreateWithoutProjectInput } from './material-entry-create-without-project.input';
export declare class MaterialEntryCreateOrConnectWithoutProjectInput {
    where: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;
    create: MaterialEntryCreateWithoutProjectInput;
}
