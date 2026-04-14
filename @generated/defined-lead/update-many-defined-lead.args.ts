import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedLeadUpdateManyMutationInput } from './defined-lead-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedLeadWhereInput } from './defined-lead-where.input';

@ArgsType()
export class UpdateManyDefinedLeadArgs {

    @Field(() => DefinedLeadUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedLeadUpdateManyMutationInput)
    data!: DefinedLeadUpdateManyMutationInput;

    @Field(() => DefinedLeadWhereInput, {nullable:true})
    @Type(() => DefinedLeadWhereInput)
    where?: DefinedLeadWhereInput;
}
