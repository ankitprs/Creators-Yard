import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import apiService from '@/gcp/data'
import { useToast } from "@/components/ui/use-toast"



function NewEditorModel({ isOpen, onCloseClick, channel_id }) {
  const [projectCreating, setProjectCreating] = useState(false)
  const [email, setEmail] = useState('');

  const onSubscribeClick = async () => {
    setProjectCreating(true)
    try {
      if (projectName.length == 0)
        throw new Error("Please... Enter correct project value")
      const res = await apiService.addEditors(channel_id, email)
      onCloseClick()
    } catch (error) {
      console.log(error);
      // toast({
      //   variant: "destructive",
      //   title: "Uh oh! Error while creating project",
      //   description: error,
      // })
    }
    setProjectCreating(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onCloseClick} >
      <DialogContent className="sm:max-w-[425px] bg-[#0E1117] text-white">
        <DialogHeader>
          <DialogTitle className=" text-[24px]">Add new editor</DialogTitle>
        </DialogHeader>
        <div className="">
          <div className='flex items-center bg-[#31363d] rounded-[20px] h-fit p-[5px] w-fit'>
            <Avatar className="h-[28px] w-[28px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='px-[10px] text-[14px]'>
              channel name
            </div>
          </div>
          <div className="flex flex-col items-start my-[24px]">
            <label htmlFor="name" className="text-right mb-[10px] text-[18px] font-semibold">
              Editor Email Id
            </label>
            <input
              id="name"
              type='email'
              defaultValue=""
              value={email}
              placeholder='Enter valid email id... '
              onChange={e => setEmail(e.target.value)}
              className=" w-full rounded-[10px] p-[10px] bg-[#292E36]"
            />
          </div>
        </div>
        <DialogFooter>
          <div className='flex w-full'>
            <Button variant="destructive" className="flex-1 mr-[5px]" onClick={onCloseClick}>Cancel</Button>
            <Button variant={projectCreating ? "default" : "newCreate"} className="flex-1 ml-[5px]" onClick={onSubscribeClick} disabled={projectCreating}>
              Add Editor
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  )
}

export default NewEditorModel