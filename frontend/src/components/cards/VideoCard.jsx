import VideoThumbnail from '../../assets/videothumbnail.png'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const VideoCard = ({ video }) => {
  // Trim the description to a certain length (e.g., 100 characters)
  const trimmedDescription = video.description.length > 100
    ? video.description.substring(0, 100) + '...'
    : video.description;

  return (
    <div className='bg-[#0E1117] rounded-[20px] p-[16px] m-[8px]'>
      <div className='flex flex-col ml-[12px]'>
        <div className='flex items-center bg-[#31363d] rounded-[20px] h-fit p-[5px] w-fit'>
          <Avatar className="h-[28px] w-[28px]">
            <AvatarImage src={"photo_url"} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='px-[10px] text-[14px]'>
            {"user_name"}
          </div>
        </div>

        <div className="flex h-72 w-full my-[18px]">
          <img
            className="w-full h-full object-cover  rounded-xl"
            src={VideoThumbnail}
            alt="thumbnail"
          />
          <div className="w-full h-full p-4">
            <h2 className="text-xl font-bold mb-2">{video.title}</h2>
            <p className="text-gray-400 overflow-hidden" style={{ maxHeight: '150px' }}>
              {trimmedDescription}
            </p>
          </div>
        </div>
        <div className='flex w-full items-end justify-end text-[#BCBCBC]'>Created at: {"created_at"}</div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
