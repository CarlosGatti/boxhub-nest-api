import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalSectionWhereInput } from './defined-proposal-section-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedProposalSectionArgs {

    @Field(() => DefinedProposalSectionWhereInput, {nullable:true})
    @Type(() => DefinedProposalSectionWhereInput)
    where?: DefinedProposalSectionWhereInput;
}
