import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemCreateWithoutCreatedByInput } from './discart-item-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DiscartItemCreateOrConnectWithoutCreatedByInput } from './discart-item-create-or-connect-without-created-by.input';
import { DiscartItemUpsertWithWhereUniqueWithoutCreatedByInput } from './discart-item-upsert-with-where-unique-without-created-by.input';
import { DiscartItemCreateManyCreatedByInputEnvelope } from './discart-item-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DiscartItemWhereUniqueInput } from './discart-item-where-unique.input';
import { DiscartItemUpdateWithWhereUniqueWithoutCreatedByInput } from './discart-item-update-with-where-unique-without-created-by.input';
import { DiscartItemUpdateManyWithWhereWithoutCreatedByInput } from './discart-item-update-many-with-where-without-created-by.input';
import { DiscartItemScalarWhereInput } from './discart-item-scalar-where.input';

@InputType()
export class DiscartItemUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [DiscartItemCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DiscartItemCreateWithoutCreatedByInput)
    create?: Array<DiscartItemCreateWithoutCreatedByInput>;

    @Field(() => [DiscartItemCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DiscartItemCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DiscartItemCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [DiscartItemUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DiscartItemUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<DiscartItemUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => DiscartItemCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DiscartItemCreateManyCreatedByInputEnvelope)
    createMany?: DiscartItemCreateManyCreatedByInputEnvelope;

    @Field(() => [DiscartItemWhereUniqueInput], {nullable:true})
    @Type(() => DiscartItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>>;

    @Field(() => [DiscartItemWhereUniqueInput], {nullable:true})
    @Type(() => DiscartItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>>;

    @Field(() => [DiscartItemWhereUniqueInput], {nullable:true})
    @Type(() => DiscartItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>>;

    @Field(() => [DiscartItemWhereUniqueInput], {nullable:true})
    @Type(() => DiscartItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DiscartItemWhereUniqueInput, 'id'>>;

    @Field(() => [DiscartItemUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DiscartItemUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<DiscartItemUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [DiscartItemUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => DiscartItemUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<DiscartItemUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [DiscartItemScalarWhereInput], {nullable:true})
    @Type(() => DiscartItemScalarWhereInput)
    deleteMany?: Array<DiscartItemScalarWhereInput>;
}
