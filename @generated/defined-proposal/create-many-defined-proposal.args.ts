import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalCreateManyInput } from './defined-proposal-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedProposalArgs {

    @Field(() => [DefinedProposalCreateManyInput], {nullable:false})
    @Type(() => DefinedProposalCreateManyInput)
    data!: Array<DefinedProposalCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
