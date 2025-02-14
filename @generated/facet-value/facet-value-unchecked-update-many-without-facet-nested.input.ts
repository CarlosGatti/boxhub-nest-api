import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetValueCreateWithoutFacetInput } from './facet-value-create-without-facet.input';
import { Type } from 'class-transformer';
import { FacetValueCreateOrConnectWithoutFacetInput } from './facet-value-create-or-connect-without-facet.input';
import { FacetValueUpsertWithWhereUniqueWithoutFacetInput } from './facet-value-upsert-with-where-unique-without-facet.input';
import { FacetValueCreateManyFacetInputEnvelope } from './facet-value-create-many-facet-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FacetValueWhereUniqueInput } from './facet-value-where-unique.input';
import { FacetValueUpdateWithWhereUniqueWithoutFacetInput } from './facet-value-update-with-where-unique-without-facet.input';
import { FacetValueUpdateManyWithWhereWithoutFacetInput } from './facet-value-update-many-with-where-without-facet.input';
import { FacetValueScalarWhereInput } from './facet-value-scalar-where.input';

@InputType()
export class FacetValueUncheckedUpdateManyWithoutFacetNestedInput {

    @Field(() => [FacetValueCreateWithoutFacetInput], {nullable:true})
    @Type(() => FacetValueCreateWithoutFacetInput)
    create?: Array<FacetValueCreateWithoutFacetInput>;

    @Field(() => [FacetValueCreateOrConnectWithoutFacetInput], {nullable:true})
    @Type(() => FacetValueCreateOrConnectWithoutFacetInput)
    connectOrCreate?: Array<FacetValueCreateOrConnectWithoutFacetInput>;

    @Field(() => [FacetValueUpsertWithWhereUniqueWithoutFacetInput], {nullable:true})
    @Type(() => FacetValueUpsertWithWhereUniqueWithoutFacetInput)
    upsert?: Array<FacetValueUpsertWithWhereUniqueWithoutFacetInput>;

    @Field(() => FacetValueCreateManyFacetInputEnvelope, {nullable:true})
    @Type(() => FacetValueCreateManyFacetInputEnvelope)
    createMany?: FacetValueCreateManyFacetInputEnvelope;

    @Field(() => [FacetValueWhereUniqueInput], {nullable:true})
    @Type(() => FacetValueWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FacetValueWhereUniqueInput, 'id'>>;

    @Field(() => [FacetValueWhereUniqueInput], {nullable:true})
    @Type(() => FacetValueWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FacetValueWhereUniqueInput, 'id'>>;

    @Field(() => [FacetValueWhereUniqueInput], {nullable:true})
    @Type(() => FacetValueWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FacetValueWhereUniqueInput, 'id'>>;

    @Field(() => [FacetValueWhereUniqueInput], {nullable:true})
    @Type(() => FacetValueWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FacetValueWhereUniqueInput, 'id'>>;

    @Field(() => [FacetValueUpdateWithWhereUniqueWithoutFacetInput], {nullable:true})
    @Type(() => FacetValueUpdateWithWhereUniqueWithoutFacetInput)
    update?: Array<FacetValueUpdateWithWhereUniqueWithoutFacetInput>;

    @Field(() => [FacetValueUpdateManyWithWhereWithoutFacetInput], {nullable:true})
    @Type(() => FacetValueUpdateManyWithWhereWithoutFacetInput)
    updateMany?: Array<FacetValueUpdateManyWithWhereWithoutFacetInput>;

    @Field(() => [FacetValueScalarWhereInput], {nullable:true})
    @Type(() => FacetValueScalarWhereInput)
    deleteMany?: Array<FacetValueScalarWhereInput>;
}
