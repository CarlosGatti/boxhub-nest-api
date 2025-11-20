import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { MaterialEntryUpdateWithoutProjectInput } from './material-entry-update-without-project.input';
import { MaterialEntryCreateWithoutProjectInput } from './material-entry-create-without-project.input';
export declare class MaterialEntryUpsertWithWhereUniqueWithoutProjectInput {
    where: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;
    update: MaterialEntryUpdateWithoutProjectInput;
    create: MaterialEntryCreateWithoutProjectInput;
}
