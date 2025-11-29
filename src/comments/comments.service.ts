import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { User } from '../../@generated/user/user.model';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateCommentInput, user: User) {
    // Validate content
    if (!input.content || input.content.trim().length === 0) {
      throw new BadRequestException('Comment content cannot be empty');
    }

    // Verify item exists
    const item = await this.prisma.discartItem.findUnique({
      where: { id: input.discartItemId },
    });

    if (!item) {
      throw new NotFoundException('Discart item not found');
    }

    // If parentId is provided, validate it
    if (input.parentId) {
      const parentComment = await this.prisma.comment.findUnique({
        where: { id: input.parentId },
        include: { discartItem: true },
      });

      if (!parentComment) {
        throw new NotFoundException('Parent comment not found');
      }

      // Verify parent comment belongs to the same item
      if (parentComment.discartItemId !== input.discartItemId) {
        throw new BadRequestException('Parent comment must belong to the same item');
      }

      // Verify parent is not a reply (only 1 level deep)
      if (parentComment.parentId !== null) {
        throw new BadRequestException('Cannot reply to a reply. Only one level of nesting allowed.');
      }
    }

    // Create comment
    const comment = await this.prisma.comment.create({
      data: {
        content: input.content.trim(),
        discartItemId: input.discartItemId,
        userId: user.id,
        parentId: input.parentId || null,
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            nickname: true,
            profilePicture: true,
          },
        },
        replies: {
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                nickname: true,
                profilePicture: true,
              },
            },
          },
          orderBy: {
            createdAt: 'asc', // Replies ordered oldest first
          },
        },
      },
    });

    return comment;
  }

  async findByDiscartItemId(discartItemId: number) {
    // Verify item exists
    const item = await this.prisma.discartItem.findUnique({
      where: { id: discartItemId },
    });

    if (!item) {
      throw new NotFoundException('Discart item not found');
    }

    // Get all top-level comments (no parent) with replies
    const comments = await this.prisma.comment.findMany({
      where: {
        discartItemId,
        parentId: null, // Only top-level comments
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            nickname: true,
            profilePicture: true,
          },
        },
        replies: {
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                nickname: true,
                profilePicture: true,
              },
            },
          },
          orderBy: {
            createdAt: 'asc', // Replies ordered oldest first
          },
        },
      },
      orderBy: {
        createdAt: 'desc', // Comments ordered newest first
      },
    });

    return comments;
  }

  async delete(commentId: number, user: User) {
    const comment = await this.prisma.comment.findUnique({
      where: { id: commentId },
      include: {
        replies: true,
      },
    });

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    // Check permissions: user can delete only their own comment, unless admin
    if (comment.userId !== user.id && !user.isAdmin) {
      throw new ForbiddenException('You can only delete your own comments');
    }

    // Delete comment (cascade will handle replies automatically due to onDelete: Cascade)
    await this.prisma.comment.delete({
      where: { id: commentId },
    });

    return { success: true, message: 'Comment deleted successfully' };
  }
}

