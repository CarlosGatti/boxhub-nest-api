import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InsuranceScalarWhereInput } from './insurance-scalar-where.input';
import { Type } from 'class-transformer';
import { InsuranceUpdateManyMutationInput } from './insurance-update-many-mutation.input';

@InputType()
export class InsuranceUpdateManyWithWhereWithoutSubcontractorInput {

    @Field(() => InsuranceScalarWhereInput, {nullable:false})
    @Type(() => InsuranceScalarWhereInput)
    where!: InsuranceScalarWhereInput;

    @Field(() => InsuranceUpdateManyMutationInput, {nullable:false})
    @Type(() => InsuranceUpdateManyMutationInput)
    data!: InsuranceUpdateManyMutationInput;
}
