import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { Type } from 'class-transformer';
import { DiscartItemCreateInput } from './discart-item-create.input';
import { DiscartItemUpdateInput } from './discart-item-update.input';

@ArgsType()
export class UpsertOneDiscartItemArgs {

    @Field(() => DiscartItemWhereUniqueInput, {nullable:false})
    @Type(() => DiscartItemWhereUniqueInput)
    where!: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;

    @Field(() => DiscartItemCreateInput, {nullable:false})
    @Type(() => DiscartItemCreateInput)
    create!: DiscartItemCreateInput;

    @Field(() => DiscartItemUpdateInput, {nullable:false})
    @Type(() => DiscartItemUpdateInput)
    update!: DiscartItemUpdateInput;
}
