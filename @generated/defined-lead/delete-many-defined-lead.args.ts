import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedLeadWhereInput } from './defined-lead-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedLeadArgs {

    @Field(() => DefinedLeadWhereInput, {nullable:true})
    @Type(() => DefinedLeadWhereInput)
    where?: DefinedLeadWhereInput;
}
