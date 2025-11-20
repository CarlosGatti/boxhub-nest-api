import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogUpdateWithoutProjectInput } from './construction-log-update-without-project.input';
import { ConstructionLogCreateWithoutProjectInput } from './construction-log-create-without-project.input';
export declare class ConstructionLogUpsertWithWhereUniqueWithoutProjectInput {
    where: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
    update: ConstructionLogUpdateWithoutProjectInput;
    create: ConstructionLogCreateWithoutProjectInput;
}
