import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateManyInput } from './defined-academy-user-career-profile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyUserCareerProfileArgs {

    @Field(() => [DefinedAcademyUserCareerProfileCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyInput)
    data!: Array<DefinedAcademyUserCareerProfileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
