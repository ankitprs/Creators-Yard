import ChannelCard from './cards/ChannelCard';
import { useRecoilValue } from 'recoil';
import { uiSidebarAtom } from '../store/atoms/uiAtom';
import { useQuery } from 'react-query';
import { REACT_QUERY_CHANNELS } from '@/utils/Constants';
import apiService from '@/gcp/data';

const ChannelSidebar = () => {
  const isSidebarOpen = useRecoilValue(uiSidebarAtom);
  const { isLoading, error, data } = useQuery({
    queryKey: [REACT_QUERY_CHANNELS],
    queryFn: apiService.getChannels
  })

  const oauthUrl = () => {
    apiService.getOauth2Url().then(url =>
      window.location.href = url
    ).catch(err => {
      console.log(err);
    })
  }

  return (
    <div
      className={`w-64  p-4 ${isSidebarOpen ? 'block' : 'hidden'} border-[#30363C] border-r-[1px]`}
    >
      <a>
        <div key={0} className="mb-2">
          <button onClick={oauthUrl} className="w-48 p-2 border rounded-lg shadow-md sm:p-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-green-500 hover:to-blue-600 transition-colors duration-300 flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 11h-6V5h-2v6H5v2h6v6h2v-6h6v-2z' fill='white'/></svg>"
                alt="Plus Icon"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate text-white">
                Create Channel
              </p>
            </div>
          </button>
        </div>
      </a>
      {data?.map(channel => (
        <a href={`/dashboard/channel/${channel.channel_id}`} key={channel.channel_id} className="mb-2" t>
          <ChannelCard channel={channel} />
        </a>
      ))}
    </div>
  )
}

export default ChannelSidebar