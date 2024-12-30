import { UserWithToken } from "@/features/users/domain/entities/user.entity";

export const userMock = (email: string): UserWithToken => ({
  id: "1",
  name: "John Doe",
  email,
  createdAt: new Date(),
  updatedAt: new Date(),
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxOTU3ZWVkMy0zNmUzLTRiNmUtOWE2Ni0xNDRlMjY2MDQyYjkiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE3MzU0ODc0MzgsImV4cCI6MTczNTQ5MTAzOH0.uzsuvYaZ-PVtjNgy_VQfjKzUwZ7eQbf-4Zp2DxcYGx8",
});
