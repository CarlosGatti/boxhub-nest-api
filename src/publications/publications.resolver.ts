import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';

import { CurrentUser } from '../user/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
  PublicationCreateArgs,
  PublicationResult,
} from './dto/publications.dto';
import { PublicationService } from './publications.service';
import { UseGuards } from '@nestjs/common';
import { Publication } from '../../@generated/publication/publication.model';
import { User } from '@prisma/client';
import { BaseResult } from '../models/base-error.dto';
import { PublicationComment } from '../../@generated/publication-comment/publication-comment.model';
import { PaginationArgs } from '../shared/types/pagination.input';
import { MailService } from 'src/services/providers/mail/mail.service';


@Resolver(() => Publication)
export class PublicationResolver {



  constructor(
    private readonly publicationService: PublicationService,
    private readonly mailService: MailService, // Inject the MailService
  ) {}

  @Query(() => PublicationResult, { name: 'publication' })
  @UseGuards(JwtAuthGuard)
  publication(@Args('id') id: number) {
    return this.publicationService.publicationById(id);
  }

  @Mutation(() => BaseResult, { name: 'createPublication' })
  @UseGuards(JwtAuthGuard)
  createPublication(
    @CurrentUser() currentUser: User,
    @Args('data') data: PublicationCreateArgs,
  ) {
    return this.publicationService.createPublication(currentUser, data);
  }

  @Mutation(() => Publication, { name: 'updatePublication' })
  @UseGuards(JwtAuthGuard)
  async updatePublication(
    @Args('id') id: number,
    @Args('data') data: PublicationCreateArgs,
  ) {
    return this.publicationService.updatePublication(id, data);
  }

  @Mutation(() => Boolean, { name: 'unpublish' })
  @UseGuards(JwtAuthGuard)
  async unpublish(@Args('id') id: number) {
    return this.publicationService.unpublish(id);
  }

  @Mutation(() => Boolean, { name: 'publish' })
  @UseGuards(JwtAuthGuard)
  async publish(@Args('id') id: number) {
    return this.publicationService.publish(id);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async likePublication(
    @CurrentUser() currentUser: User,
    @Args('id') id: number,
  ) {
    return this.publicationService.likePublication(id, currentUser.id);
  }

  @Mutation(() => Boolean, { name: 'unlikePublication' })
  @UseGuards(JwtAuthGuard)
  async unlikePublication(
    @CurrentUser() currentUser: User,
    @Args('id') id: number,
  ) {
    return this.publicationService.unlikePublication(id, currentUser.id);
  }

  @Mutation(() => Boolean, { name: 'commentPublication' })
  @UseGuards(JwtAuthGuard)
  async commentPublication(
    @CurrentUser() currentUser: User,
    @Args('id') id: number,
    @Args('content') content: string,
  ) {
    return this.publicationService.commentPublication(
      id,
      currentUser.id,
      content,
    );
  }

  @Mutation(() => Boolean, { name: 'uncommentPublication' })
  @UseGuards(JwtAuthGuard)
  async uncommentPublication(
    @Args('id') id: number,
    @Args('commentId') commentId: number,
  ) {
    return this.publicationService.deleteComment(id, commentId);
  }

  @Query(() => [PublicationComment], { name: 'findCommentsByPublication' })
  @UseGuards(JwtAuthGuard)
  findCommentsByPublication(
    @Args('publicationId') publicationId: number,
    @Args('pagination', { nullable: true }) pagination?: PaginationArgs,
  ) {
    return this.publicationService.findCommentsByPublication(
      publicationId,
      pagination,
    );
  }

  
@Mutation(() => BaseResult)
async sendEmail(
  @Args('to') to: string,
  @Args('subject') subject: string,
  @Args('message') message: string,
  @Args('name') name: string,
  @Args('email') email: string,
): Promise<BaseResult> {  
  try {
    await this.mailService.send({
      to,
      subject,
      variables: {name, email, message }, // Ajuste conforme o template
      path: 'contact_us', // Use o template correto
    });
    return { success: true, message: 'Email enviado com sucesso.' };
  } catch (error) {
    return { success: false, message: 'Erro ao enviar email.' };
  }
}


  
}



