import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedProposalArgs {

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    @Type(() => DefinedProposalWhereInput)
    where?: DefinedProposalWhereInput;
}
