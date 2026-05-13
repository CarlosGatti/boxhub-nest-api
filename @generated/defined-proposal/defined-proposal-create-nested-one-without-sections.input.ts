import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateWithoutSectionsInput } from './defined-proposal-create-without-sections.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateOrConnectWithoutSectionsInput } from './defined-proposal-create-or-connect-without-sections.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';

@InputType()
export class DefinedProposalCreateNestedOneWithoutSectionsInput {

    @Field(() => DefinedProposalCreateWithoutSectionsInput, {nullable:true})
    @Type(() => DefinedProposalCreateWithoutSectionsInput)
    create?: DefinedProposalCreateWithoutSectionsInput;

    @Field(() => DefinedProposalCreateOrConnectWithoutSectionsInput, {nullable:true})
    @Type(() => DefinedProposalCreateOrConnectWithoutSectionsInput)
    connectOrCreate?: DefinedProposalCreateOrConnectWithoutSectionsInput;

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProposalWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;
}
