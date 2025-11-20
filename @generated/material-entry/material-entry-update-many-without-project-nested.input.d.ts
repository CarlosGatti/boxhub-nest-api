import { MaterialEntryCreateWithoutProjectInput } from './material-entry-create-without-project.input';
import { MaterialEntryCreateOrConnectWithoutProjectInput } from './material-entry-create-or-connect-without-project.input';
import { MaterialEntryUpsertWithWhereUniqueWithoutProjectInput } from './material-entry-upsert-with-where-unique-without-project.input';
import { MaterialEntryCreateManyProjectInputEnvelope } from './material-entry-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { MaterialEntryUpdateWithWhereUniqueWithoutProjectInput } from './material-entry-update-with-where-unique-without-project.input';
import { MaterialEntryUpdateManyWithWhereWithoutProjectInput } from './material-entry-update-many-with-where-without-project.input';
import { MaterialEntryScalarWhereInput } from './material-entry-scalar-where.input';
export declare class MaterialEntryUpdateManyWithoutProjectNestedInput {
    create?: Array<MaterialEntryCreateWithoutProjectInput>;
    connectOrCreate?: Array<MaterialEntryCreateOrConnectWithoutProjectInput>;
    upsert?: Array<MaterialEntryUpsertWithWhereUniqueWithoutProjectInput>;
    createMany?: MaterialEntryCreateManyProjectInputEnvelope;
    set?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
    update?: Array<MaterialEntryUpdateWithWhereUniqueWithoutProjectInput>;
    updateMany?: Array<MaterialEntryUpdateManyWithWhereWithoutProjectInput>;
    deleteMany?: Array<MaterialEntryScalarWhereInput>;
}
