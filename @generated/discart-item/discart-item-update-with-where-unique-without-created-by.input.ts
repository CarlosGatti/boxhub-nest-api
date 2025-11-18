import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { Type } from 'class-transformer';
import { DiscartItemUpdateWithoutCreatedByInput } from './discart-item-update-without-created-by.input';

@InputType()
export class DiscartItemUpdateWithWhereUniqueWithoutCreatedByInput {

    @Field(() => DiscartItemWhereUniqueInput, {nullable:false})
    @Type(() => DiscartItemWhereUniqueInput)
    where!: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;

    @Field(() => DiscartItemUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => DiscartItemUpdateWithoutCreatedByInput)
    data!: DiscartItemUpdateWithoutCreatedByInput;
}
