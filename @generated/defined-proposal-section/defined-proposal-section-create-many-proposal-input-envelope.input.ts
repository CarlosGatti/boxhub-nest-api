import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalSectionCreateManyProposalInput } from './defined-proposal-section-create-many-proposal.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProposalSectionCreateManyProposalInputEnvelope {

    @Field(() => [DefinedProposalSectionCreateManyProposalInput], {nullable:false})
    @Type(() => DefinedProposalSectionCreateManyProposalInput)
    data!: Array<DefinedProposalSectionCreateManyProposalInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
