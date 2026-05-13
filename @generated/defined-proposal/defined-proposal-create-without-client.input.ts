import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProposalStatus } from '../prisma/defined-proposal-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedProjectCreateNestedOneWithoutProposalsInput } from '../defined-project/defined-project-create-nested-one-without-proposals.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutDefinedProposalsCreatedInput } from '../user/user-create-nested-one-without-defined-proposals-created.input';
import { DefinedProposalSectionCreateNestedManyWithoutProposalInput } from '../defined-proposal-section/defined-proposal-section-create-nested-many-without-proposal.input';
import { DefinedProposalPricingOptionCreateNestedManyWithoutProposalInput } from '../defined-proposal-pricing-option/defined-proposal-pricing-option-create-nested-many-without-proposal.input';

@InputType()
export class DefinedProposalCreateWithoutClientInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => DefinedProposalStatus, {nullable:true})
    status?: keyof typeof DefinedProposalStatus;

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    contentJson?: any;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => String, {nullable:true})
    shareToken?: string;

    @Field(() => Date, {nullable:true})
    shareTokenCreatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    shareTokenExpiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    shareRevokedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    sentAt?: Date | string;

    @Field(() => Date, {nullable:true})
    viewedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    approvedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    declinedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedProjectCreateNestedOneWithoutProposalsInput, {nullable:true})
    @Type(() => DefinedProjectCreateNestedOneWithoutProposalsInput)
    project?: DefinedProjectCreateNestedOneWithoutProposalsInput;

    @Field(() => UserCreateNestedOneWithoutDefinedProposalsCreatedInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutDefinedProposalsCreatedInput)
    createdBy?: UserCreateNestedOneWithoutDefinedProposalsCreatedInput;

    @Field(() => DefinedProposalSectionCreateNestedManyWithoutProposalInput, {nullable:true})
    sections?: DefinedProposalSectionCreateNestedManyWithoutProposalInput;

    @Field(() => DefinedProposalPricingOptionCreateNestedManyWithoutProposalInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionCreateNestedManyWithoutProposalInput)
    pricingOptions?: DefinedProposalPricingOptionCreateNestedManyWithoutProposalInput;
}
