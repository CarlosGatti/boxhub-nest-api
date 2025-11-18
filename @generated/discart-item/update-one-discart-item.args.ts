import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DiscartItemUpdateInput } from './discart-item-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';

@ArgsType()
export class UpdateOneDiscartItemArgs {

    @Field(() => DiscartItemUpdateInput, {nullable:false})
    @Type(() => DiscartItemUpdateInput)
    data!: DiscartItemUpdateInput;

    @Field(() => DiscartItemWhereUniqueInput, {nullable:false})
    @Type(() => DiscartItemWhereUniqueInput)
    where!: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;
}
