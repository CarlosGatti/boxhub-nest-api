import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedLeadCreateInput } from './defined-lead-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedLeadArgs {

    @Field(() => DefinedLeadCreateInput, {nullable:false})
    @Type(() => DefinedLeadCreateInput)
    data!: DefinedLeadCreateInput;
}
