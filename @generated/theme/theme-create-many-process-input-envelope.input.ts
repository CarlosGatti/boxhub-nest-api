import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThemeCreateManyProcessInput } from './theme-create-many-process.input';
import { Type } from 'class-transformer';

@InputType()
export class ThemeCreateManyProcessInputEnvelope {

    @Field(() => [ThemeCreateManyProcessInput], {nullable:false})
    @Type(() => ThemeCreateManyProcessInput)
    data!: Array<ThemeCreateManyProcessInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
