import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardProjectStatus } from '../prisma/review-card-project-status.enum';
import { ReviewCardLinkMode } from '../prisma/review-card-link-mode.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';
import { ReviewCardBusiness } from '../review-card-business/review-card-business.model';
import { ReviewCardTemplate } from '../review-card-template/review-card-template.model';
import { ReviewCardExport } from '../review-card-export/review-card-export.model';
import { ReviewCardScanEvent } from '../review-card-scan-event/review-card-scan-event.model';
import { ReviewCardPremiumRequest } from '../review-card-premium-request/review-card-premium-request.model';
import { ReviewCardProjectCount } from './review-card-project-count.output';

@ObjectType()
export class ReviewCardProject {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    businessId!: number;

    @Field(() => Int, {nullable:false})
    templateId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    slug!: string | null;

    @Field(() => ReviewCardProjectStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof ReviewCardProjectStatus;

    @Field(() => ReviewCardLinkMode, {nullable:false,defaultValue:'REDIRECT'})
    reviewLinkMode!: keyof typeof ReviewCardLinkMode;

    @Field(() => String, {nullable:true})
    googleReviewUrlFinal!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    designJson!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    assetsJson!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => ReviewCardBusiness, {nullable:false})
    business?: ReviewCardBusiness;

    @Field(() => ReviewCardTemplate, {nullable:false})
    template?: ReviewCardTemplate;

    @Field(() => [ReviewCardExport], {nullable:true})
    exports?: Array<ReviewCardExport>;

    @Field(() => [ReviewCardScanEvent], {nullable:true})
    scans?: Array<ReviewCardScanEvent>;

    @Field(() => [ReviewCardPremiumRequest], {nullable:true})
    premiumRequests?: Array<ReviewCardPremiumRequest>;

    @Field(() => ReviewCardProjectCount, {nullable:false})
    _count?: ReviewCardProjectCount;
}
