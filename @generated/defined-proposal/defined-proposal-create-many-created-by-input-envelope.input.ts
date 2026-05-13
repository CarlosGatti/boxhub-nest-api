import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateManyCreatedByInput } from './defined-proposal-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProposalCreateManyCreatedByInputEnvelope {

    @Field(() => [DefinedProposalCreateManyCreatedByInput], {nullable:false})
    @Type(() => DefinedProposalCreateManyCreatedByInput)
    data!: Array<DefinedProposalCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
