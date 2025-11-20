import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogCreateWithoutUserInput } from './construction-log-create-without-user.input';
export declare class ConstructionLogCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
    create: ConstructionLogCreateWithoutUserInput;
}
