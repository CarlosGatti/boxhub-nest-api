import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogUpdateWithoutUserInput } from './construction-log-update-without-user.input';
import { ConstructionLogCreateWithoutUserInput } from './construction-log-create-without-user.input';
export declare class ConstructionLogUpsertWithWhereUniqueWithoutUserInput {
    where: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
    update: ConstructionLogUpdateWithoutUserInput;
    create: ConstructionLogCreateWithoutUserInput;
}
