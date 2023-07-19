import Joi, { Err } from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  phone: Joi.string()
    .required()
    .pattern(/^[0-9]+$/)
    .required(),
  name: Joi.string().required(),
  message: Joi.string().min(20),
});

export default defineEventHandler(async (event) => {
  try {
    const listingId = event.context.params!.listingId;
    const body = await readBody(event);

    const { error } = await schema.validate(body);
    if (error) {
      throw createError({
        statusCode: 422,
        statusMessage: error.message,
      });
    }

    const { message, email, phone, name } = body;
    const createdMessage = await prisma.message.create({
      data: {
        message,
        email,
        name,
        phone,
        listingId,
      },
    });

    return createdMessage;
  } catch (error: Err | any) {
    console.log({ error });
    throw createError({
      statusCode: error.statusCode,
      statusMessage: error.statusMessage,
    });
  }
});
