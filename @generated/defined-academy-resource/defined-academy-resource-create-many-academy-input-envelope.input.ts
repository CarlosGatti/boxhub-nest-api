import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateManyAcademyInput } from './defined-academy-resource-create-many-academy.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyResourceCreateManyAcademyInputEnvelope {

    @Field(() => [DefinedAcademyResourceCreateManyAcademyInput], {nullable:false})
    @Type(() => DefinedAcademyResourceCreateManyAcademyInput)
    data!: Array<DefinedAcademyResourceCreateManyAcademyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
