import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCreateWithoutCommentsInput } from './discart-item-create-without-comments.input';
import { Type } from 'class-transformer';
import { DiscartItemCreateOrConnectWithoutCommentsInput } from './discart-item-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';

@InputType()
export class DiscartItemCreateNestedOneWithoutCommentsInput {

    @Field(() => DiscartItemCreateWithoutCommentsInput, {nullable:true})
    @Type(() => DiscartItemCreateWithoutCommentsInput)
    create?: DiscartItemCreateWithoutCommentsInput;

    @Field(() => DiscartItemCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => DiscartItemCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: DiscartItemCreateOrConnectWithoutCommentsInput;

    @Field(() => DiscartItemWhereUniqueInput, {nullable:true})
    @Type(() => DiscartItemWhereUniqueInput)
    connect?: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;
}
