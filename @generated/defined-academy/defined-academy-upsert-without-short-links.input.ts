import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUpdateWithoutShortLinksInput } from './defined-academy-update-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutShortLinksInput } from './defined-academy-create-without-short-links.input';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@InputType()
export class DefinedAcademyUpsertWithoutShortLinksInput {

    @Field(() => DefinedAcademyUpdateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutShortLinksInput)
    update!: DefinedAcademyUpdateWithoutShortLinksInput;

    @Field(() => DefinedAcademyCreateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutShortLinksInput)
    create!: DefinedAcademyCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;
}
