import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogUpdateWithoutProjectInput } from './construction-log-update-without-project.input';
export declare class ConstructionLogUpdateWithWhereUniqueWithoutProjectInput {
    where: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
    data: ConstructionLogUpdateWithoutProjectInput;
}
