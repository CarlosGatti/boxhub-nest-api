import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateManyClientInput } from './defined-proposal-create-many-client.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProposalCreateManyClientInputEnvelope {

    @Field(() => [DefinedProposalCreateManyClientInput], {nullable:false})
    @Type(() => DefinedProposalCreateManyClientInput)
    data!: Array<DefinedProposalCreateManyClientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
