import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileWhereInput } from './defined-academy-user-career-profile-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyUserCareerProfileArgs {

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereInput)
    where?: DefinedAcademyUserCareerProfileWhereInput;
}
