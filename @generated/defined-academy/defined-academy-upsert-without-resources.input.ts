import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUpdateWithoutResourcesInput } from './defined-academy-update-without-resources.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutResourcesInput } from './defined-academy-create-without-resources.input';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@InputType()
export class DefinedAcademyUpsertWithoutResourcesInput {

    @Field(() => DefinedAcademyUpdateWithoutResourcesInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutResourcesInput)
    update!: DefinedAcademyUpdateWithoutResourcesInput;

    @Field(() => DefinedAcademyCreateWithoutResourcesInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutResourcesInput)
    create!: DefinedAcademyCreateWithoutResourcesInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;
}
