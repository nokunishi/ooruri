import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      throw new Error("Current user cannot be retrieved");
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      throw new Error("Current user cannot be found");
    }

    return currentUser;
  } catch (e) {}
}
