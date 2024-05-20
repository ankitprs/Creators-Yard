import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import apiService from '@/gcp/data'
import { DialogDescription } from '@radix-ui/react-dialog'



function UpgradePlanModel({ isOpen, onCloseClick }) {

  const onSubscribeClick = async () => {
    try {
      if (projectName.length == 0)
        throw new Error("Please... Enter correct project value")
      const res = await apiService.createProject(projectName)
      onCloseClick()
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onCloseClick} >
      <DialogContent className="sm:max-w-[425px] bg-[#0E1117] text-white">
        <DialogHeader>
          <DialogTitle className=" text-[24px]">Buy Creator Plan</DialogTitle>
          <DialogDescription>You need creator plan to proceed</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center">
          <div>
            <div className=' font-semibold text-[64px]'>$49</div>
            <div className='font-semibold text-[36px]'>/month</div>
          </div>
          <div className="flex flex-col items-start my-[24px]">
            <ul> Ideal for individuals and small teams</ul>
            <ul> 5 editor invitations</ul>
            <ul> Unlimited video edits and publishing</ul>
            <ul> Advanced security features</ul>
            <ul> Cancel anytime</ul>
          </div>
        </div>
        <DialogFooter>
          <div className='flex w-full'>
            <Button variant="destructive" className="flex-1 mr-[5px]" onClick={onCloseClick}>Cancel</Button>
            <Button variant={projectCreating ? "default" : "newCreate"} className="flex-1 ml-[5px]" onClick={onSubscribeClick} disabled={projectCreating}>
              Buy
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  )
}

export default UpgradePlanModel