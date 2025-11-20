import { MaterialEntryCreateWithoutProjectInput } from './material-entry-create-without-project.input';
import { MaterialEntryCreateOrConnectWithoutProjectInput } from './material-entry-create-or-connect-without-project.input';
import { MaterialEntryCreateManyProjectInputEnvelope } from './material-entry-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
export declare class MaterialEntryCreateNestedManyWithoutProjectInput {
    create?: Array<MaterialEntryCreateWithoutProjectInput>;
    connectOrCreate?: Array<MaterialEntryCreateOrConnectWithoutProjectInput>;
    createMany?: MaterialEntryCreateManyProjectInputEnvelope;
    connect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
}
