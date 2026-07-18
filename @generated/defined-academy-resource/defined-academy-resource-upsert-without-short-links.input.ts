import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceUpdateWithoutShortLinksInput } from './defined-academy-resource-update-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateWithoutShortLinksInput } from './defined-academy-resource-create-without-short-links.input';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';

@InputType()
export class DefinedAcademyResourceUpsertWithoutShortLinksInput {

    @Field(() => DefinedAcademyResourceUpdateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateWithoutShortLinksInput)
    update!: DefinedAcademyResourceUpdateWithoutShortLinksInput;

    @Field(() => DefinedAcademyResourceCreateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyResourceCreateWithoutShortLinksInput)
    create!: DefinedAcademyResourceCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    where?: DefinedAcademyResourceWhereInput;
}
