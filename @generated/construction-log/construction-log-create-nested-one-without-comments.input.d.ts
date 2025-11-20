import { ConstructionLogCreateWithoutCommentsInput } from './construction-log-create-without-comments.input';
import { ConstructionLogCreateOrConnectWithoutCommentsInput } from './construction-log-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
export declare class ConstructionLogCreateNestedOneWithoutCommentsInput {
    create?: ConstructionLogCreateWithoutCommentsInput;
    connectOrCreate?: ConstructionLogCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
}
