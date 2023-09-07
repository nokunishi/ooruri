import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getUsers() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error("current user not retrieved");
    }

    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          id: currentUser.id,
        },
      },
    });

    return users;
  } catch (e) {}
}
