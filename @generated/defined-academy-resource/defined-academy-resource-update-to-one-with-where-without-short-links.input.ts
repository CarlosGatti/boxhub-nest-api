import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceUpdateWithoutShortLinksInput } from './defined-academy-resource-update-without-short-links.input';

@InputType()
export class DefinedAcademyResourceUpdateToOneWithWhereWithoutShortLinksInput {

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    where?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceUpdateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateWithoutShortLinksInput)
    data!: DefinedAcademyResourceUpdateWithoutShortLinksInput;
}
