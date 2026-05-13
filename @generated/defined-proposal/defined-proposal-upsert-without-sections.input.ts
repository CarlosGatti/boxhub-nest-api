import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalUpdateWithoutSectionsInput } from './defined-proposal-update-without-sections.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateWithoutSectionsInput } from './defined-proposal-create-without-sections.input';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';

@InputType()
export class DefinedProposalUpsertWithoutSectionsInput {

    @Field(() => DefinedProposalUpdateWithoutSectionsInput, {nullable:false})
    @Type(() => DefinedProposalUpdateWithoutSectionsInput)
    update!: DefinedProposalUpdateWithoutSectionsInput;

    @Field(() => DefinedProposalCreateWithoutSectionsInput, {nullable:false})
    @Type(() => DefinedProposalCreateWithoutSectionsInput)
    create!: DefinedProposalCreateWithoutSectionsInput;

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    @Type(() => DefinedProposalWhereInput)
    where?: DefinedProposalWhereInput;
}
