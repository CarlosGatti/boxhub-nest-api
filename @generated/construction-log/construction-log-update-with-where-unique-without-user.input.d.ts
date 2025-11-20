import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogUpdateWithoutUserInput } from './construction-log-update-without-user.input';
export declare class ConstructionLogUpdateWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
    data: ConstructionLogUpdateWithoutUserInput;
}
