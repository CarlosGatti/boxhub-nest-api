import { ProjectCreateWithoutResponsibleInput } from './project-create-without-responsible.input';
import { ProjectCreateOrConnectWithoutResponsibleInput } from './project-create-or-connect-without-responsible.input';
import { ProjectUpsertWithWhereUniqueWithoutResponsibleInput } from './project-upsert-with-where-unique-without-responsible.input';
import { ProjectCreateManyResponsibleInputEnvelope } from './project-create-many-responsible-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutResponsibleInput } from './project-update-with-where-unique-without-responsible.input';
import { ProjectUpdateManyWithWhereWithoutResponsibleInput } from './project-update-many-with-where-without-responsible.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';
export declare class ProjectUpdateManyWithoutResponsibleNestedInput {
    create?: Array<ProjectCreateWithoutResponsibleInput>;
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutResponsibleInput>;
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutResponsibleInput>;
    createMany?: ProjectCreateManyResponsibleInputEnvelope;
    set?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>>;
    update?: Array<ProjectUpdateWithWhereUniqueWithoutResponsibleInput>;
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutResponsibleInput>;
    deleteMany?: Array<ProjectScalarWhereInput>;
}
