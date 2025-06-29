import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubcontractorUpdateWithoutInsurancesInput } from './subcontractor-update-without-insurances.input';
import { Type } from 'class-transformer';
import { SubcontractorCreateWithoutInsurancesInput } from './subcontractor-create-without-insurances.input';
import { SubcontractorWhereInput } from './subcontractor-where.input';

@InputType()
export class SubcontractorUpsertWithoutInsurancesInput {

    @Field(() => SubcontractorUpdateWithoutInsurancesInput, {nullable:false})
    @Type(() => SubcontractorUpdateWithoutInsurancesInput)
    update!: SubcontractorUpdateWithoutInsurancesInput;

    @Field(() => SubcontractorCreateWithoutInsurancesInput, {nullable:false})
    @Type(() => SubcontractorCreateWithoutInsurancesInput)
    create!: SubcontractorCreateWithoutInsurancesInput;

    @Field(() => SubcontractorWhereInput, {nullable:true})
    @Type(() => SubcontractorWhereInput)
    where?: SubcontractorWhereInput;
}
