import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { Type } from 'class-transformer';
import { DiscartItemUpdateWithoutCreatedByInput } from './discart-item-update-without-created-by.input';
import { DiscartItemCreateWithoutCreatedByInput } from './discart-item-create-without-created-by.input';

@InputType()
export class DiscartItemUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => DiscartItemWhereUniqueInput, {nullable:false})
    @Type(() => DiscartItemWhereUniqueInput)
    where!: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;

    @Field(() => DiscartItemUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => DiscartItemUpdateWithoutCreatedByInput)
    update!: DiscartItemUpdateWithoutCreatedByInput;

    @Field(() => DiscartItemCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => DiscartItemCreateWithoutCreatedByInput)
    create!: DiscartItemCreateWithoutCreatedByInput;
}
