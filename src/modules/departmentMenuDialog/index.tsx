import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Menu as MenuIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function DepartmentMenuModal() {
  return (
    // <Dialog className="!max-w-3xl !w-full" style={{
	// 	maxWidth: "900px",
	// 	width: "100%"
	// }}>
    //   <DialogTrigger asChild>
	//   	<Button className="absolute bottom-2 right-2 rounded-sm">
	// 		<MenuIcon />
	// 	</Button>
    //   </DialogTrigger>
    //   <DialogContent className="max-w-lg w-full bg-[#0a0a0a85] flex flex-col">
    //     <DialogHeader>
    //       <DialogTitle className="text-white">Choose a department</DialogTitle>
    //     </DialogHeader>
    //     <div className="grid grid-cols-2 !gap-5 w-full max-w-full">
    //       <CardItem />
    //       <CardItem />
    //     </div>
    // </Dialog>
	<Dialog>
        <DialogTrigger asChild>
		<Button className="absolute bottom-2 right-2 rounded-sm">
			<MenuIcon />
		</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription className="flex grid-cols-2 space-x-5 w-full max-w-full">
				<CardItem />
				<CardItem />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}

const CardItem = () => {
	return (
		<div className="!relative group rounded-lg mr-[30px]">
			{/* <Link className="absolute inset-0 z-10" href="#">
				<span className="sr-only">View</span>
			</Link> */}
			<Image
				alt="Card 1"
				className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-300"
				height={200}
				width={200}
				src="/images/driving.jpeg"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50" />
				<div className="absolute inset-0 flex items-center justify-center">
				<h3 className="text-white text-xl font-semibold text-center">Card 1</h3>
			</div>
      </div>
	)
}
