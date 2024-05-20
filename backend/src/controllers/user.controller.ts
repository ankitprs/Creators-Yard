import { prisma } from '../config/prismaClient'
import admin from '../config/firebaseConfig'



const createUser = async (email_id: string) => {
  const userCalled = await admin.auth().getUserByEmail(email_id)

  if (!userCalled)
    new Error('User Not Found')

  return await prisma.user.create({
    data: {
      emailId: email_id,
      displayName: userCalled.displayName,
      photoUrl: userCalled.photoURL
    }
  })
}

const getUser = async (email_id: string) => {
  return await prisma.user.findUnique({
    where: { emailId: email_id }
  })
};

const newPremiumSubscription = async (email_id: string, subscriptionStart: Date, subscriptionEnd: Date) => {
  const updatedUser = await prisma.user.update({
    where: {
      emailId: email_id
    },
    data: {
      subscriptionEnd: subscriptionEnd,
      subscriptionStart: subscriptionStart
    }
  })
  return updatedUser
}

// basic function
const isUserPremium = async (email_id: string) => {
  try {
    const user = await await prisma.user.findUnique({
      where: { emailId: email_id },
      select: {
        subscriptionStart: true,
        subscriptionEnd: true
      }
    })

    const currentDate = new Date()

    if (user?.subscriptionStart && (user?.subscriptionStart < currentDate) && user?.subscriptionEnd && (user?.subscriptionEnd > currentDate))
      return true;
    else
      return false;
  } catch (error) {
    console.log({ message: error });
    return false;
  }
}

const isOwnerOfChannel = async (email_id: string, channel_id: string) => {
  try {
    const channel = await prisma.channel.findUnique({
      where: { channelId: channel_id },
      select: {
        ownerEmailId: true
      }
    })
    if (channel?.ownerEmailId == email_id) return true
    else return false
  } catch (err) {
    console.log(err);
    return false;
  }
}

const isEditorOfChannel = async (email_id: string, channel_id: string) => {
  try {
    const editors = await prisma.editorsOnChannel.findUnique({
      where: {
        editorEmailId_channelChannelId: {
          editorEmailId: email_id,
          channelChannelId: channel_id
        }
      },
    })
    if (!editors) return false
    else return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}


export { createUser, getUser, isUserPremium, isEditorOfChannel, isOwnerOfChannel, newPremiumSubscription };
