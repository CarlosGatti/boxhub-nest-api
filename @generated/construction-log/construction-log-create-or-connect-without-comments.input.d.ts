import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogCreateWithoutCommentsInput } from './construction-log-create-without-comments.input';
export declare class ConstructionLogCreateOrConnectWithoutCommentsInput {
    where: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
    create: ConstructionLogCreateWithoutCommentsInput;
}
