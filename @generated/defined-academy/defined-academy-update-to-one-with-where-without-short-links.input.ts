import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateWithoutShortLinksInput } from './defined-academy-update-without-short-links.input';

@InputType()
export class DefinedAcademyUpdateToOneWithWhereWithoutShortLinksInput {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyUpdateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutShortLinksInput)
    data!: DefinedAcademyUpdateWithoutShortLinksInput;
}
