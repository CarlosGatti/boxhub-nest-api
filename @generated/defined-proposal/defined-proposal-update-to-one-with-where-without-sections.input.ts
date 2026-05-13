import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalWhereInput } from './defined-proposal-where.input';
import { Type } from 'class-transformer';
import { DefinedProposalUpdateWithoutSectionsInput } from './defined-proposal-update-without-sections.input';

@InputType()
export class DefinedProposalUpdateToOneWithWhereWithoutSectionsInput {

    @Field(() => DefinedProposalWhereInput, {nullable:true})
    @Type(() => DefinedProposalWhereInput)
    where?: DefinedProposalWhereInput;

    @Field(() => DefinedProposalUpdateWithoutSectionsInput, {nullable:false})
    @Type(() => DefinedProposalUpdateWithoutSectionsInput)
    data!: DefinedProposalUpdateWithoutSectionsInput;
}
