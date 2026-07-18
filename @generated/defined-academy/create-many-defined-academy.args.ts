import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCreateManyInput } from './defined-academy-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyArgs {

    @Field(() => [DefinedAcademyCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyCreateManyInput)
    data!: Array<DefinedAcademyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
