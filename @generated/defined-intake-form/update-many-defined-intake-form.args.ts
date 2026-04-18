import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeFormUpdateManyMutationInput } from './defined-intake-form-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormWhereInput } from './defined-intake-form-where.input';

@ArgsType()
export class UpdateManyDefinedIntakeFormArgs {

    @Field(() => DefinedIntakeFormUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedIntakeFormUpdateManyMutationInput)
    data!: DefinedIntakeFormUpdateManyMutationInput;

    @Field(() => DefinedIntakeFormWhereInput, {nullable:true})
    @Type(() => DefinedIntakeFormWhereInput)
    where?: DefinedIntakeFormWhereInput;
}
