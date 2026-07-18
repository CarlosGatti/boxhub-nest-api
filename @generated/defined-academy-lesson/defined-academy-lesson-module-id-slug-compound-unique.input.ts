import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyLessonModuleIdSlugCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    moduleId!: number;

    @Field(() => String, {nullable:false})
    slug!: string;
}
