import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateWithoutPartnersInput } from './defined-academy-update-without-partners.input';

@InputType()
export class DefinedAcademyUpdateToOneWithWhereWithoutPartnersInput {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyUpdateWithoutPartnersInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutPartnersInput)
    data!: DefinedAcademyUpdateWithoutPartnersInput;
}
