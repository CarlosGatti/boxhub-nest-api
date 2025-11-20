import { ConstructionLogCreateWithoutCommentsInput } from './construction-log-create-without-comments.input';
import { ConstructionLogCreateOrConnectWithoutCommentsInput } from './construction-log-create-or-connect-without-comments.input';
import { ConstructionLogUpsertWithoutCommentsInput } from './construction-log-upsert-without-comments.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { ConstructionLogUpdateToOneWithWhereWithoutCommentsInput } from './construction-log-update-to-one-with-where-without-comments.input';
export declare class ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput {
    create?: ConstructionLogCreateWithoutCommentsInput;
    connectOrCreate?: ConstructionLogCreateOrConnectWithoutCommentsInput;
    upsert?: ConstructionLogUpsertWithoutCommentsInput;
    connect?: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
    update?: ConstructionLogUpdateToOneWithWhereWithoutCommentsInput;
}
