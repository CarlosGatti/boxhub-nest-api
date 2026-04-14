import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedLeadCreateManyInput } from './defined-lead-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedLeadArgs {

    @Field(() => [DefinedLeadCreateManyInput], {nullable:false})
    @Type(() => DefinedLeadCreateManyInput)
    data!: Array<DefinedLeadCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
