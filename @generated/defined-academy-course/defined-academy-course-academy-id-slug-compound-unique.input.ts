import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyCourseAcademyIdSlugCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    slug!: string;
}
