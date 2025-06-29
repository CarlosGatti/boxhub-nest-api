import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InsuranceCreateInput } from './insurance-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneInsuranceArgs {

    @Field(() => InsuranceCreateInput, {nullable:false})
    @Type(() => InsuranceCreateInput)
    data!: InsuranceCreateInput;
}
