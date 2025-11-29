import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCreateWithoutCommentsInput } from './discart-item-create-without-comments.input';
import { Type } from 'class-transformer';
import { DiscartItemCreateOrConnectWithoutCommentsInput } from './discart-item-create-or-connect-without-comments.input';
import { DiscartItemUpsertWithoutCommentsInput } from './discart-item-upsert-without-comments.input';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { DiscartItemUpdateToOneWithWhereWithoutCommentsInput } from './discart-item-update-to-one-with-where-without-comments.input';

@InputType()
export class DiscartItemUpdateOneRequiredWithoutCommentsNestedInput {

    @Field(() => DiscartItemCreateWithoutCommentsInput, {nullable:true})
    @Type(() => DiscartItemCreateWithoutCommentsInput)
    create?: DiscartItemCreateWithoutCommentsInput;

    @Field(() => DiscartItemCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => DiscartItemCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: DiscartItemCreateOrConnectWithoutCommentsInput;

    @Field(() => DiscartItemUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => DiscartItemUpsertWithoutCommentsInput)
    upsert?: DiscartItemUpsertWithoutCommentsInput;

    @Field(() => DiscartItemWhereUniqueInput, {nullable:true})
    @Type(() => DiscartItemWhereUniqueInput)
    connect?: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;

    @Field(() => DiscartItemUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => DiscartItemUpdateToOneWithWhereWithoutCommentsInput)
    update?: DiscartItemUpdateToOneWithWhereWithoutCommentsInput;
}
