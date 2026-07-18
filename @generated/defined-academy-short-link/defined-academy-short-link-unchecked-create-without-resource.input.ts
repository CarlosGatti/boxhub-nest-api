import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyShortLinkStatus } from '../prisma/defined-academy-short-link-status.enum';
import { DefinedAcademyShortLinkEventUncheckedCreateNestedManyWithoutShortLinkInput } from '../defined-academy-short-link-event/defined-academy-short-link-event-unchecked-create-nested-many-without-short-link.input';

@InputType()
export class DefinedAcademyShortLinkUncheckedCreateWithoutResourceInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    destinationUrl!: string;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Int, {nullable:true})
    partnerId?: number;

    @Field(() => Int, {nullable:true})
    referralCampaignId?: number;

    @Field(() => DefinedAcademyShortLinkStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyShortLinkStatus;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Int, {nullable:true})
    visitCount?: number;

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyShortLinkEventUncheckedCreateNestedManyWithoutShortLinkInput, {nullable:true})
    events?: DefinedAcademyShortLinkEventUncheckedCreateNestedManyWithoutShortLinkInput;
}
