import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateManyAppInput } from './defined-academy-create-many-app.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyCreateManyAppInputEnvelope {

    @Field(() => [DefinedAcademyCreateManyAppInput], {nullable:false})
    @Type(() => DefinedAcademyCreateManyAppInput)
    data!: Array<DefinedAcademyCreateManyAppInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
