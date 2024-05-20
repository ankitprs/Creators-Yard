-- CreateTable
CREATE TABLE "User" (
    "emailId" TEXT NOT NULL,
    "displayName" TEXT,
    "photoUrl" TEXT,
    "subscriptionStart" TIMESTAMP(3),
    "subscriptionEnd" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("emailId")
);

-- CreateTable
CREATE TABLE "Channel" (
    "channelId" TEXT NOT NULL,
    "channelName" TEXT NOT NULL,
    "channelIconUrl" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "expiresId" TEXT NOT NULL,
    "ownerEmailId" TEXT NOT NULL,

    CONSTRAINT "Channel_pkey" PRIMARY KEY ("channelId")
);

-- CreateTable
CREATE TABLE "EditorsOnChannel" (
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "editorEmailId" TEXT NOT NULL,
    "channelChannelId" TEXT NOT NULL,

    CONSTRAINT "EditorsOnChannel_pkey" PRIMARY KEY ("editorEmailId","channelChannelId")
);

-- CreateTable
CREATE TABLE "Project" (
    "projectId" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL,
    "createdUserEmailId" TEXT NOT NULL,
    "channelChannelId" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("projectId")
);

-- CreateTable
CREATE TABLE "Video" (
    "videoId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "videoRef" TEXT,
    "projectProjectId" TEXT NOT NULL,
    "channelChannelId" TEXT NOT NULL,
    "createdUserEmailId" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("videoId")
);

-- AddForeignKey
ALTER TABLE "Channel" ADD CONSTRAINT "Channel_ownerEmailId_fkey" FOREIGN KEY ("ownerEmailId") REFERENCES "User"("emailId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EditorsOnChannel" ADD CONSTRAINT "EditorsOnChannel_editorEmailId_fkey" FOREIGN KEY ("editorEmailId") REFERENCES "User"("emailId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EditorsOnChannel" ADD CONSTRAINT "EditorsOnChannel_channelChannelId_fkey" FOREIGN KEY ("channelChannelId") REFERENCES "Channel"("channelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_channelChannelId_fkey" FOREIGN KEY ("channelChannelId") REFERENCES "Channel"("channelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_createdUserEmailId_fkey" FOREIGN KEY ("createdUserEmailId") REFERENCES "User"("emailId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_channelChannelId_fkey" FOREIGN KEY ("channelChannelId") REFERENCES "Channel"("channelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_createdUserEmailId_fkey" FOREIGN KEY ("createdUserEmailId") REFERENCES "User"("emailId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_projectProjectId_fkey" FOREIGN KEY ("projectProjectId") REFERENCES "Project"("projectId") ON DELETE RESTRICT ON UPDATE CASCADE;
