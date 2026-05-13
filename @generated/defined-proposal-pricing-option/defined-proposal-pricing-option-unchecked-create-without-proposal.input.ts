import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProposalPricingType } from '../prisma/defined-proposal-pricing-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { DefinedProposalPricingOptionCreatefeaturesInput } from './defined-proposal-pricing-option-createfeatures.input';

@InputType()
export class DefinedProposalPricingOptionUncheckedCreateWithoutProposalInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedProposalPricingType, {nullable:true})
    type?: keyof typeof DefinedProposalPricingType;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    amount?: Decimal;

    @Field(() => String, {nullable:true})
    currency?: string;

    @Field(() => String, {nullable:true})
    billingNote?: string;

    @Field(() => DefinedProposalPricingOptionCreatefeaturesInput, {nullable:true})
    @Type(() => DefinedProposalPricingOptionCreatefeaturesInput)
    features?: DefinedProposalPricingOptionCreatefeaturesInput;

    @Field(() => Boolean, {nullable:true})
    isRecommended?: boolean;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
