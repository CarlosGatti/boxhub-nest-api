import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateManyProjectInput } from './defined-proposal-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProposalCreateManyProjectInputEnvelope {

    @Field(() => [DefinedProposalCreateManyProjectInput], {nullable:false})
    @Type(() => DefinedProposalCreateManyProjectInput)
    data!: Array<DefinedProposalCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
