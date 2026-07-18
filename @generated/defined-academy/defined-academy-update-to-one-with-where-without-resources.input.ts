import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateWithoutResourcesInput } from './defined-academy-update-without-resources.input';

@InputType()
export class DefinedAcademyUpdateToOneWithWhereWithoutResourcesInput {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyUpdateWithoutResourcesInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutResourcesInput)
    data!: DefinedAcademyUpdateWithoutResourcesInput;
}
