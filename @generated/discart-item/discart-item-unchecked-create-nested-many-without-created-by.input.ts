import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCreateWithoutCreatedByInput } from './discart-item-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DiscartItemCreateOrConnectWithoutCreatedByInput } from './discart-item-create-or-connect-without-created-by.input';
import { DiscartItemCreateManyCreatedByInputEnvelope } from './discart-item-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';

@InputType()
export class DiscartItemUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [DiscartItemCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DiscartItemCreateWithoutCreatedByInput)
    create?: Array<DiscartItemCreateWithoutCreatedByInput>;

    @Field(() => [DiscartItemCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DiscartItemCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DiscartItemCreateOrConnectWithoutCreatedByInput>;

    @Field(() => DiscartItemCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DiscartItemCreateManyCreatedByInputEnvelope)
    createMany?: DiscartItemCreateManyCreatedByInputEnvelope;

    @Field(() => [DiscartItemWhereUniqueInput], {nullable:true})
    @Type(() => DiscartItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>>;
}
