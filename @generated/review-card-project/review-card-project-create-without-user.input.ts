import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectStatus } from '../prisma/review-card-project-status.enum';
import { ReviewCardLinkMode } from '../prisma/review-card-link-mode.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ReviewCardBusinessCreateNestedOneWithoutProjectsInput } from '../review-card-business/review-card-business-create-nested-one-without-projects.input';
import { ReviewCardTemplateCreateNestedOneWithoutProjectsInput } from '../review-card-template/review-card-template-create-nested-one-without-projects.input';
import { ReviewCardExportCreateNestedManyWithoutProjectInput } from '../review-card-export/review-card-export-create-nested-many-without-project.input';
import { ReviewCardScanEventCreateNestedManyWithoutProjectInput } from '../review-card-scan-event/review-card-scan-event-create-nested-many-without-project.input';
import { ReviewCardPremiumRequestCreateNestedManyWithoutProjectInput } from '../review-card-premium-request/review-card-premium-request-create-nested-many-without-project.input';

@InputType()
export class ReviewCardProjectCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => ReviewCardProjectStatus, {nullable:true})
    status?: keyof typeof ReviewCardProjectStatus;

    @Field(() => ReviewCardLinkMode, {nullable:true})
    reviewLinkMode?: keyof typeof ReviewCardLinkMode;

    @Field(() => String, {nullable:true})
    googleReviewUrlFinal?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    designJson?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    assetsJson?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReviewCardBusinessCreateNestedOneWithoutProjectsInput, {nullable:false})
    business!: ReviewCardBusinessCreateNestedOneWithoutProjectsInput;

    @Field(() => ReviewCardTemplateCreateNestedOneWithoutProjectsInput, {nullable:false})
    template!: ReviewCardTemplateCreateNestedOneWithoutProjectsInput;

    @Field(() => ReviewCardExportCreateNestedManyWithoutProjectInput, {nullable:true})
    exports?: ReviewCardExportCreateNestedManyWithoutProjectInput;

    @Field(() => ReviewCardScanEventCreateNestedManyWithoutProjectInput, {nullable:true})
    scans?: ReviewCardScanEventCreateNestedManyWithoutProjectInput;

    @Field(() => ReviewCardPremiumRequestCreateNestedManyWithoutProjectInput, {nullable:true})
    premiumRequests?: ReviewCardPremiumRequestCreateNestedManyWithoutProjectInput;
}
