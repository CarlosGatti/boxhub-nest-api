import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubcontractorWhereInput } from './subcontractor-where.input';
import { Type } from 'class-transformer';
import { SubcontractorUpdateWithoutInsurancesInput } from './subcontractor-update-without-insurances.input';

@InputType()
export class SubcontractorUpdateToOneWithWhereWithoutInsurancesInput {

    @Field(() => SubcontractorWhereInput, {nullable:true})
    @Type(() => SubcontractorWhereInput)
    where?: SubcontractorWhereInput;

    @Field(() => SubcontractorUpdateWithoutInsurancesInput, {nullable:false})
    @Type(() => SubcontractorUpdateWithoutInsurancesInput)
    data!: SubcontractorUpdateWithoutInsurancesInput;
}
