import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogCreateWithoutProjectInput } from './construction-log-create-without-project.input';
export declare class ConstructionLogCreateOrConnectWithoutProjectInput {
    where: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
    create: ConstructionLogCreateWithoutProjectInput;
}
