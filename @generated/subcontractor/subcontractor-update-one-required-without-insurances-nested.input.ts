import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubcontractorCreateWithoutInsurancesInput } from './subcontractor-create-without-insurances.input';
import { Type } from 'class-transformer';
import { SubcontractorCreateOrConnectWithoutInsurancesInput } from './subcontractor-create-or-connect-without-insurances.input';
import { SubcontractorUpsertWithoutInsurancesInput } from './subcontractor-upsert-without-insurances.input';
import { Prisma } from '@prisma/client';
import { SubcontractorWhereUniqueInput } from './subcontractor-where-unique.input';
import { SubcontractorUpdateToOneWithWhereWithoutInsurancesInput } from './subcontractor-update-to-one-with-where-without-insurances.input';

@InputType()
export class SubcontractorUpdateOneRequiredWithoutInsurancesNestedInput {

    @Field(() => SubcontractorCreateWithoutInsurancesInput, {nullable:true})
    @Type(() => SubcontractorCreateWithoutInsurancesInput)
    create?: SubcontractorCreateWithoutInsurancesInput;

    @Field(() => SubcontractorCreateOrConnectWithoutInsurancesInput, {nullable:true})
    @Type(() => SubcontractorCreateOrConnectWithoutInsurancesInput)
    connectOrCreate?: SubcontractorCreateOrConnectWithoutInsurancesInput;

    @Field(() => SubcontractorUpsertWithoutInsurancesInput, {nullable:true})
    @Type(() => SubcontractorUpsertWithoutInsurancesInput)
    upsert?: SubcontractorUpsertWithoutInsurancesInput;

    @Field(() => SubcontractorWhereUniqueInput, {nullable:true})
    @Type(() => SubcontractorWhereUniqueInput)
    connect?: Prisma.AtLeast<SubcontractorWhereUniqueInput, 'id'>;

    @Field(() => SubcontractorUpdateToOneWithWhereWithoutInsurancesInput, {nullable:true})
    @Type(() => SubcontractorUpdateToOneWithWhereWithoutInsurancesInput)
    update?: SubcontractorUpdateToOneWithWhereWithoutInsurancesInput;
}
