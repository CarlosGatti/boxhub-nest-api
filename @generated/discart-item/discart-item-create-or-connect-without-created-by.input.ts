import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { Type } from 'class-transformer';
import { DiscartItemCreateWithoutCreatedByInput } from './discart-item-create-without-created-by.input';

@InputType()
export class DiscartItemCreateOrConnectWithoutCreatedByInput {

    @Field(() => DiscartItemWhereUniqueInput, {nullable:false})
    @Type(() => DiscartItemWhereUniqueInput)
    where!: Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>;

    @Field(() => DiscartItemCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => DiscartItemCreateWithoutCreatedByInput)
    create!: DiscartItemCreateWithoutCreatedByInput;
}
