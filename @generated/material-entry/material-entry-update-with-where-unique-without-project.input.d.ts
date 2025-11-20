import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { MaterialEntryUpdateWithoutProjectInput } from './material-entry-update-without-project.input';
export declare class MaterialEntryUpdateWithWhereUniqueWithoutProjectInput {
    where: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;
    data: MaterialEntryUpdateWithoutProjectInput;
}
