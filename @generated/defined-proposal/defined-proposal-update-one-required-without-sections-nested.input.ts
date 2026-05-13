import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalCreateWithoutSectionsInput } from './defined-proposal-create-without-sections.input';
import { Type } from 'class-transformer';
import { DefinedProposalCreateOrConnectWithoutSectionsInput } from './defined-proposal-create-or-connect-without-sections.input';
import { DefinedProposalUpsertWithoutSectionsInput } from './defined-proposal-upsert-without-sections.input';
import { Prisma } from '@prisma/client';
import { DefinedProposalWhereUniqueInput } from './defined-proposal-where-unique.input';
import { DefinedProposalUpdateToOneWithWhereWithoutSectionsInput } from './defined-proposal-update-to-one-with-where-without-sections.input';

@InputType()
export class DefinedProposalUpdateOneRequiredWithoutSectionsNestedInput {

    @Field(() => DefinedProposalCreateWithoutSectionsInput, {nullable:true})
    @Type(() => DefinedProposalCreateWithoutSectionsInput)
    create?: DefinedProposalCreateWithoutSectionsInput;

    @Field(() => DefinedProposalCreateOrConnectWithoutSectionsInput, {nullable:true})
    @Type(() => DefinedProposalCreateOrConnectWithoutSectionsInput)
    connectOrCreate?: DefinedProposalCreateOrConnectWithoutSectionsInput;

    @Field(() => DefinedProposalUpsertWithoutSectionsInput, {nullable:true})
    @Type(() => DefinedProposalUpsertWithoutSectionsInput)
    upsert?: DefinedProposalUpsertWithoutSectionsInput;

    @Field(() => DefinedProposalWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProposalWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProposalWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedProposalUpdateToOneWithWhereWithoutSectionsInput, {nullable:true})
    @Type(() => DefinedProposalUpdateToOneWithWhereWithoutSectionsInput)
    update?: DefinedProposalUpdateToOneWithWhereWithoutSectionsInput;
}
