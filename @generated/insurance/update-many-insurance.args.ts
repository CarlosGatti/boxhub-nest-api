import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InsuranceUpdateManyMutationInput } from './insurance-update-many-mutation.input';
import { Type } from 'class-transformer';
import { InsuranceWhereInput } from './insurance-where.input';

@ArgsType()
export class UpdateManyInsuranceArgs {

    @Field(() => InsuranceUpdateManyMutationInput, {nullable:false})
    @Type(() => InsuranceUpdateManyMutationInput)
    data!: InsuranceUpdateManyMutationInput;

    @Field(() => InsuranceWhereInput, {nullable:true})
    @Type(() => InsuranceWhereInput)
    where?: InsuranceWhereInput;
}
