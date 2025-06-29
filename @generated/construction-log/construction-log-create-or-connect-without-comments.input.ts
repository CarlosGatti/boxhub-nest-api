import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { Type } from 'class-transformer';
import { ConstructionLogCreateWithoutCommentsInput } from './construction-log-create-without-comments.input';

@InputType()
export class ConstructionLogCreateOrConnectWithoutCommentsInput {

    @Field(() => ConstructionLogWhereUniqueInput, {nullable:false})
    @Type(() => ConstructionLogWhereUniqueInput)
    where!: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;

    @Field(() => ConstructionLogCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ConstructionLogCreateWithoutCommentsInput)
    create!: ConstructionLogCreateWithoutCommentsInput;
}
