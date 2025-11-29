import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { Type } from 'class-transformer';
import { DiscartItemCreateWithoutCommentsInput } from './discart-item-create-without-comments.input';

@InputType()
export class DiscartItemCreateOrConnectWithoutCommentsInput {

    @Field(() => DiscartItemWhereUniqueInput, {nullable:false})
    @Type(() => DiscartItemWhereUniqueInput)
    where!: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;

    @Field(() => DiscartItemCreateWithoutCommentsInput, {nullable:false})
    @Type(() => DiscartItemCreateWithoutCommentsInput)
    create!: DiscartItemCreateWithoutCommentsInput;
}
