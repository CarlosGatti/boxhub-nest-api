import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProposalSectionCreateInput } from './defined-proposal-section-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedProposalSectionArgs {

    @Field(() => DefinedProposalSectionCreateInput, {nullable:false})
    @Type(() => DefinedProposalSectionCreateInput)
    data!: DefinedProposalSectionCreateInput;
}
