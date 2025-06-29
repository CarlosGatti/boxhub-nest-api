import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InsuranceWhereInput } from './insurance-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyInsuranceArgs {

    @Field(() => InsuranceWhereInput, {nullable:true})
    @Type(() => InsuranceWhereInput)
    where?: InsuranceWhereInput;
}
