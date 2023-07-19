import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object().keys({
  name: Joi.string().required(),
  model: Joi.string().required(),
  make: Joi.string().required(),
  year: Joi.number()
    .min(1886)
    .max(new Date().getFullYear() + 1)
    .required(),
  miles: Joi.number().required().min(0),
  city: Joi.string().min(2).required(),
  numberOfSeats: Joi.number().max(1000).min(1).required(),
  features: Joi.array().items(Joi.string()).required(),
  description: Joi.string(),
  image: Joi.string().required(),
  listerId: Joi.string().required(),
  price: Joi.number().min(0).required(),
});

export default defineEventHandler(async (event) => {
  // const headerAuthorization = getHeader(event, "authorization");
  // const jwtToken = headerAuthorization?.split(" ")[1];
  const body = await readBody(event);

  const { error, value } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      message: error.message,
    });
  }

  const {
    name,
    model,
    make,
    year,
    miles,
    city,
    numberOfSeats,
    features,
    description,
    image,
    listerId,
    price,
  } = body;

  const car = await prisma.car.create({
    data: {
      name,
      model,
      make,
      year,
      miles,
      city,
      numberOfSeats,
      features,
      description,
      image,
      listerId,
      price,
    },
  });
  return car;
});
