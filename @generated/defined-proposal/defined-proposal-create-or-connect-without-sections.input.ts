import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateWithoutSectionsInput } from './defined-proposal-create-without-sections.input';

@InputType()
export class DefinedProposalCreateOrConnectWithoutSectionsInput {

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProposalWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedProposalCreateWithoutSectionsInput, {nullable:false})
    @Type(() => DefinedProposalCreateWithoutSectionsInput)
    create!: DefinedProposalCreateWithoutSectionsInput;
}
