import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademy } from '../defined-academy/defined-academy.model';
import { DefinedAcademyPartner } from '../defined-academy-partner/defined-academy-partner.model';
import { DefinedAcademyPartnerCategoryCount } from './defined-academy-partner-category-count.output';

@ObjectType()
export class DefinedAcademyPartnerCategory {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sortOrder!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademy, {nullable:false})
    academy?: DefinedAcademy;

    @Field(() => [DefinedAcademyPartner], {nullable:true})
    partners?: Array<DefinedAcademyPartner>;

    @Field(() => DefinedAcademyPartnerCategoryCount, {nullable:false})
    _count?: DefinedAcademyPartnerCategoryCount;
}
