import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCourseUpdateManyMutationInput } from './defined-academy-course-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyCourseArgs {

    @Field(() => DefinedAcademyCourseUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateManyMutationInput)
    data!: DefinedAcademyCourseUpdateManyMutationInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;
}
