import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogCreateWithoutCommentsInput } from './construction-log-create-without-comments.input';
import { Type } from 'class-transformer';
import { ConstructionLogCreateOrConnectWithoutCommentsInput } from './construction-log-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';

@InputType()
export class ConstructionLogCreateNestedOneWithoutCommentsInput {

    @Field(() => ConstructionLogCreateWithoutCommentsInput, {nullable:true})
    @Type(() => ConstructionLogCreateWithoutCommentsInput)
    create?: ConstructionLogCreateWithoutCommentsInput;

    @Field(() => ConstructionLogCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => ConstructionLogCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: ConstructionLogCreateOrConnectWithoutCommentsInput;

    @Field(() => ConstructionLogWhereUniqueInput, {nullable:true})
    @Type(() => ConstructionLogWhereUniqueInput)
    connect?: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;
}
