import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUpdateWithoutPartnersInput } from './defined-academy-update-without-partners.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutPartnersInput } from './defined-academy-create-without-partners.input';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@InputType()
export class DefinedAcademyUpsertWithoutPartnersInput {

    @Field(() => DefinedAcademyUpdateWithoutPartnersInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutPartnersInput)
    update!: DefinedAcademyUpdateWithoutPartnersInput;

    @Field(() => DefinedAcademyCreateWithoutPartnersInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutPartnersInput)
    create!: DefinedAcademyCreateWithoutPartnersInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;
}
